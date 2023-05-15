package com.example.product_clothing_management.service.impl;

import com.example.product_clothing_management.model.Product;
import com.example.product_clothing_management.repository.IProductRepository;
import com.example.product_clothing_management.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public void update(Product product , int id) {
        Product product1 = iProductRepository.findById(id).get();
        iProductRepository.save(product1);
    }

    @Override
    public Product findById(int id) {
        return iProductRepository.findById(id).get();
    }
}
