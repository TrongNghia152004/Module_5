package com.example.figureshopbe.service.product.impl;

import com.example.figureshopbe.model.ProductType;
import com.example.figureshopbe.repository.IProductTypeRepository;
import com.example.figureshopbe.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public List<ProductType> findAll() {
        return iProductTypeRepository.findAll();
    }
}
