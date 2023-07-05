package com.example.figureshopbe.service.orderDetail;

import com.example.figureshopbe.model.OrderDetail;
import com.example.figureshopbe.repository.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAll(Integer id) {
        return iOrderDetailRepository.findOrderDetailByCustomer_Id(id);
    }

    @Override
    public List<OrderDetail> findAllByOrder(Integer id) {
        return iOrderDetailRepository.findOrderDetailByOrder_Id(id);
    }
}
