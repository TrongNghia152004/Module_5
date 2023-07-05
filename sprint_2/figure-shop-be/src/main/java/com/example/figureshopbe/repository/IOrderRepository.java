package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<Order , Integer> {
}
