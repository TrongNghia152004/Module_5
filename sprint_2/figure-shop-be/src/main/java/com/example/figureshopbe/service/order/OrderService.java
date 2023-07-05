package com.example.figureshopbe.service.order;

import com.example.figureshopbe.model.Order;
import com.example.figureshopbe.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository iOrderRepository;
    @Override
    public void save(Order order) {
        iOrderRepository.save(order);
    }

    @Override
    public Order findById(Integer id) {
        return iOrderRepository.findById(id).get();
    }
}
