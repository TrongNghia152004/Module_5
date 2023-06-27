package com.example.figureshopbe.service.customer.impl;

import com.example.figureshopbe.model.Customer;
import com.example.figureshopbe.repository.ICustomerRepository;
import com.example.figureshopbe.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }
}
