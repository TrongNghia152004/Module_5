package com.example.product_clothing_management.repository;

import com.example.product_clothing_management.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
//    @Transactional
////    @Query(name = "select * from product", nativeQuery = true)
////    List<Product> findAllProduct();
//    @Query(name = "update product set name = ? , import_date = ? , quantity = ? , id_product_type = ? where id = id" , nativeQuery = true)
//    void updateProduct(@Param("id") int id);
}
