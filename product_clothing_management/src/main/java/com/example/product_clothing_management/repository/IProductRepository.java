package com.example.product_clothing_management.repository;

import com.example.product_clothing_management.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where name like %:name% and id_product_type like %:id% order by quantity asc",nativeQuery = true)
    Page<Product> findByName(@Param("name") String name, @Param("id") String productType, Pageable pageable);
    @Query(value = "select * from product where id = :id",nativeQuery = true)
    Product findByIdProduct(@Param("id") Integer id);
    @Modifying
    @Transactional
    @Query(value = "insert into product(name,import_date,quantity,id_product_type) values (:name,:import_date,:quantity,:id_product_type)",nativeQuery = true)
    void saveProduct(@Param("name")String name
            ,@Param("import_date")String importDate
            ,@Param("quantity")String quantity
            ,@Param("id_product_type") Integer productTypeId
    );
    @Modifying
    @Transactional
    @Query(value = "delete from product where id = :id",nativeQuery = true)
    void deleteProduct(int id);
    @Modifying
    @Transactional
    @Query(value = "update product set name = :name, import_date = :import_date, quantity = :quantity , id_product_type = :id_product_type where id = :id",nativeQuery = true)
    void edit(@Param("name")String name
            ,@Param("import_date")String importDate
            ,@Param("quantity")String quantity
            ,@Param("id_product_type") Integer productTypeId
            ,@Param("id")Integer id
    );
}
