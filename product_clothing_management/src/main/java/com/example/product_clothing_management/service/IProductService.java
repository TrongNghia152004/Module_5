package com.example.product_clothing_management.service;

import com.example.product_clothing_management.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    List<Product> findAll();
    void update(Product product , int id);
    Product findById(int id);
}
