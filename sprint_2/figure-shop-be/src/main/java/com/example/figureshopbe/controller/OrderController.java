package com.example.figureshopbe.controller;

import com.example.figureshopbe.dto.PaymentDTO;
import com.example.figureshopbe.model.*;
import com.example.figureshopbe.security.jwt.JwtProvider;
import com.example.figureshopbe.security.jwt.JwtTokenFilter;
import com.example.figureshopbe.service.cart.ICartService;
import com.example.figureshopbe.service.customer.ICustomerService;
import com.example.figureshopbe.service.order.IOrderService;
import com.example.figureshopbe.service.orderDetail.IOrderDetailService;
import com.example.figureshopbe.service.product.IFigureProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IFigureProductService iFigureProductService;
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IOrderService iOrderService;
    @Autowired
    private IOrderDetailService iOrderDetailService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/payment")
    public void payment(HttpServletRequest request, @RequestBody PaymentDTO paymentDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<Cart> cartList = iCartService.findAllCart(name);
        Order order = new Order();
        order.setTotalPayment(paymentDTO.getTotalPrice());
        order.setDate(String.valueOf(LocalDate.now()));
        iOrderService.save(order);
        for (int i = 0; i < cartList.size(); i++) {
            FigureProduct figureProduct = iFigureProductService.findById(cartList.get(i).getFigureProduct().getId());
            figureProduct.setQuantity(cartList.get(i).getFigureProduct().getQuantity() - cartList.get(i).getQuantity());
            iFigureProductService.save(figureProduct);
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setQuantityOrder(cartList.get(i).getQuantity());
            orderDetail.setFigureProduct(cartList.get(i).getFigureProduct());
            orderDetail.setCustomer(customer);
            orderDetail.setOrder(order);
            iOrderDetailService.save(orderDetail);
            iCartService.delete(cartList.get(i));
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/history")
    public List<Order> findAllOrderByCustomer(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        List<OrderDetail> orderDetails = iOrderDetailService.findAll(customer.getId());
        Set<Integer> integers = new HashSet<>();
        List<Order> orders = new ArrayList<>();
        for (int i = 0; i < orderDetails.size(); i++) {
            integers.add(orderDetails.get(i).getOrder().getId());
        }
        List<Integer> count = new ArrayList<>(integers);
        for (int i = 0; i < count.size(); i++) {
            Order order = iOrderService.findById(count.get(i));
            orders.add(order);
        }
        return orders;
    }
}
