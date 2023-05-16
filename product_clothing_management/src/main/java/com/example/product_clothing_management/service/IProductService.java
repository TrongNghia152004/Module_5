package com.example.product_clothing_management.service;

import com.example.product_clothing_management.dto.ProductDTO;
import com.example.product_clothing_management.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    Page<Product> findByName(String name, String bookType, Pageable pageable);
    Product findByIdProduct(int id);
    void create(ProductDTO productDTO);
    void edit(ProductDTO productDTO);
    void deleteProduct(int id);
}
