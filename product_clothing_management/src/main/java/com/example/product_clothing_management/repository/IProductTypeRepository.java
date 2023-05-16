package com.example.product_clothing_management.repository;

import com.example.product_clothing_management.model.Product;
import com.example.product_clothing_management.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductTypeRepository extends JpaRepository<ProductType , Integer> {
    @Query(value = "select * from type_product",nativeQuery = true)
    List<ProductType> findAllBookType();
}
