package com.example.figureshopbe.service.product;

import com.example.figureshopbe.model.FigureProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface IFigureProductService {
    Page<FigureProduct> findProductByTypeProduct(String name , Integer idType, Pageable pageable);
    FigureProduct findById(int id);
    void save(FigureProduct figureProduct);
}
