package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer , Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);
}
