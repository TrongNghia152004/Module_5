package com.example.figureshopbe.controller;

import com.example.figureshopbe.model.Customer;
import com.example.figureshopbe.security.jwt.JwtProvider;
import com.example.figureshopbe.security.jwt.JwtTokenFilter;
import com.example.figureshopbe.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/public/customer")
@CrossOrigin("*")
public class CustomerRestController {
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Customer findCustomer(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return customer;
    }
}
