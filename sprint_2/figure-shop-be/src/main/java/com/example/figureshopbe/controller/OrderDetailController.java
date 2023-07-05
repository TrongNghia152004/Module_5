package com.example.figureshopbe.controller;

import com.example.figureshopbe.model.Customer;
import com.example.figureshopbe.model.Order;
import com.example.figureshopbe.model.OrderDetail;
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
import java.util.List;

@RestController
@RequestMapping("/api/user/order-detail")
@CrossOrigin("*")
public class OrderDetailController {
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
    @GetMapping("/{id}")
    public List<OrderDetail> findAllOrderByCustomer(HttpServletRequest request , @PathVariable("id") Integer id){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return iOrderDetailService.findAllByOrder(id);
    }
}
