package com.example.figureshopbe.controller;

import com.example.figureshopbe.model.ProductType;
import com.example.figureshopbe.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/product-type")
@CrossOrigin("*")
public class ProductTypeService {
    @Autowired
    private ITypeProductService iTypeProductService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<ProductType> findAllProductType(){
        return iTypeProductService.findAll();
    }
}
