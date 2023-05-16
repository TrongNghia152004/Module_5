package com.example.product_clothing_management.service.impl;

import com.example.product_clothing_management.dto.ProductDTO;
import com.example.product_clothing_management.model.Product;
import com.example.product_clothing_management.model.ProductType;
import com.example.product_clothing_management.repository.IProductRepository;
import com.example.product_clothing_management.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public Page<Product> findByName(String name, String bookType, Pageable pageable) {
        return iProductRepository.findByName(name,bookType,pageable);
    }

    @Override
    public Product findByIdProduct(int id) {
        return iProductRepository.findByIdProduct(id);
    }

    @Override
    public void create(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(new ProductType(productDTO.getProductTypeDTO().getId()));
        BeanUtils.copyProperties(productDTO,product);
        iProductRepository.saveProduct(
                product.getName(),
                product.getImportDate(),
                String.valueOf(product.getQuantity()),
                product.getProductType().getId());
    }

    @Override
    public void edit(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(new ProductType(productDTO.getProductTypeDTO().getId()));
        BeanUtils.copyProperties(productDTO,product);
        iProductRepository.edit(
                product.getName(),
                product.getImportDate(),
                String.valueOf(product.getQuantity()),
                product.getProductType().getId(),
                product.getId());
    }

    @Override
    public void deleteProduct(int id) {
        iProductRepository.deleteProduct(id);
    }
}
