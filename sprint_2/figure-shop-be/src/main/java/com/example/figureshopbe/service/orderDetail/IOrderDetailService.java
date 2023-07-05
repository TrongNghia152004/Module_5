package com.example.figureshopbe.service.orderDetail;

import com.example.figureshopbe.model.OrderDetail;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IOrderDetailService {
    void save(OrderDetail orderDetail);
    List<OrderDetail> findAll(Integer id);
    List<OrderDetail> findAllByOrder(Integer id);
}
