package com.example.product_clothing_management.controller;

import com.example.product_clothing_management.model.Product;
import com.example.product_clothing_management.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> showList() {
        return iProductService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product findById(@PathVariable int id) {
        return iProductService.findById(id);
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable("id") int id, @RequestBody Product product) {
        iProductService.update(product, id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void create() {
        Product product = new Product();
        iProductService.create(product);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable int id) {
        iProductService.delete(id);
    }
}
