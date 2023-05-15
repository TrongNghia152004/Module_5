package com.example.product_clothing_management.repository;

import com.example.product_clothing_management.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
//    @Transactional
//    @Query(name = "select * from product", nativeQuery = true)
//    List<Product> findAllProduct();
}
