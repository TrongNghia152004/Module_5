package com.example.figureshopbe.service.product.impl;

import com.example.figureshopbe.model.FigureProduct;
import com.example.figureshopbe.repository.IFigureProductRepository;
import com.example.figureshopbe.service.product.IFigureProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FigureProductService implements IFigureProductService {
    @Autowired
    private IFigureProductRepository iFigureProductRepository;
    @Override
    public Page<FigureProduct> findProductByTypeProduct(String name, Integer idType,Pageable pageable) {
        return iFigureProductRepository.findAllFigureProduct(name , idType , pageable);
    }
    @Override
    public FigureProduct findById(int id) {
        return iFigureProductRepository.findById(id).get();
    }
}
