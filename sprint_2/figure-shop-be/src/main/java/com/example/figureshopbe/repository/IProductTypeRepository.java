package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductTypeRepository extends JpaRepository<ProductType , Integer> {

}
