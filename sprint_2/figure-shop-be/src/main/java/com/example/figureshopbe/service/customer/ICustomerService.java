package com.example.figureshopbe.service.customer;

import com.example.figureshopbe.model.Customer;
import org.springframework.stereotype.Service;

@Service
public interface ICustomerService {
    Customer findByAccount(String name);
}
