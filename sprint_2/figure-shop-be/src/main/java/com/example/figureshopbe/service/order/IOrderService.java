package com.example.figureshopbe.service.order;

import com.example.figureshopbe.model.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IOrderService {
    void save(Order order);
    Order findById(Integer id);
}
