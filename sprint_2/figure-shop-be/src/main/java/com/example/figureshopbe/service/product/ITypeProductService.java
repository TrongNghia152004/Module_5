package com.example.figureshopbe.service.product;

import com.example.figureshopbe.model.ProductType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITypeProductService {
    List<ProductType> findAll();
}
