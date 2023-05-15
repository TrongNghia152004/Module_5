package com.example.product_clothing_management.service;

import com.example.product_clothing_management.model.ProductType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductTypeService {
    List<ProductType> findAll();
}
