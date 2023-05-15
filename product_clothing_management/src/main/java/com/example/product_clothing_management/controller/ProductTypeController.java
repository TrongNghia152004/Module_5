package com.example.product_clothing_management.controller;

import com.example.product_clothing_management.model.ProductType;
import com.example.product_clothing_management.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product-type")
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private IProductTypeService iProductTypeService;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductType> showList(){
        return iProductTypeService.findAll();
    }
}
