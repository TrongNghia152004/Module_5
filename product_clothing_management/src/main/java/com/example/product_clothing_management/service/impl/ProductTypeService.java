package com.example.product_clothing_management.service.impl;

import com.example.product_clothing_management.model.ProductType;
import com.example.product_clothing_management.repository.IProductTypeRepository;
import com.example.product_clothing_management.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;
    @Override
    public List<ProductType> findProductType() {
        return iProductTypeRepository.findAllBookType();
    }
}
