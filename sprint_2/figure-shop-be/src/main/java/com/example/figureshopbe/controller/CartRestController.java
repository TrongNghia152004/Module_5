package com.example.figureshopbe.controller;

import com.example.figureshopbe.dto.CartCreateDTO;
import com.example.figureshopbe.dto.UpdateCartDTO;
import com.example.figureshopbe.model.Cart;
import com.example.figureshopbe.model.Customer;
import com.example.figureshopbe.model.FigureProduct;
import com.example.figureshopbe.security.jwt.JwtProvider;
import com.example.figureshopbe.security.jwt.JwtTokenFilter;
import com.example.figureshopbe.security.response.ResponseMessage;
import com.example.figureshopbe.service.cart.ICartService;
import com.example.figureshopbe.service.customer.ICustomerService;
import com.example.figureshopbe.service.product.IFigureProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/public/cart")
@CrossOrigin("*")
public class CartRestController {
    @Autowired
    private ICartService iCartService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IFigureProductService iFigureProductService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public ResponseEntity<?> findAllCart(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        if (name == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(iCartService.findAllCart(name), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody CartCreateDTO cartCreateDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        if (customer == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        Cart existCart = iCartService.existCart(customer.getId(), cartCreateDTO.getFigureProduct());
        FigureProduct figureProduct = iFigureProductService.findById(cartCreateDTO.getFigureProduct());
        if (existCart != null) {
            if (figureProduct.getQuantity() > existCart.getQuantity()){
                existCart.setQuantity(existCart.getQuantity() + cartCreateDTO.getQuantity());
                iCartService.add(existCart);
                return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
            }else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }

        } else {
            Cart cart = new Cart();
            if (figureProduct.getQuantity() >= cartCreateDTO.getQuantity()){
                cart.setQuantity(cartCreateDTO.getQuantity());
                cart.setCustomer(customer);
                cart.setStatus(cartCreateDTO.isStatus());
                cart.setFigureProduct(figureProduct);
                iCartService.add(cart);
                return new ResponseEntity<>(new ResponseMessage("Thêm vào giỏ hàng thành công"), HttpStatus.OK);
            }else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/update")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody UpdateCartDTO updateCartDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        Cart cart = iCartService.existCart(customer.getId(), updateCartDTO.getFigureProduct());
        if (cart.getFigureProduct().getQuantity() >= updateCartDTO.getQuantity()) {
            cart.setQuantity(updateCartDTO.getQuantity());
            iCartService.add(cart);
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng thành công"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeCart(HttpServletRequest request, @PathVariable("id") Integer id) {
        iCartService.delete(iCartService.findById(id));
        return new ResponseEntity<>(new ResponseMessage("Xoá sản phẩm thành công"), HttpStatus.OK);
    }
}
