package com.example.figureshopbe.service.cart;

import com.example.figureshopbe.model.Cart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICartService {
    List<Cart> findAllCart(String name);
    Cart existCart(int idCustomer , int idProduct);

    void decrease(int quantity);

    void increase(int quantity);
    void add(Cart cart);
    void delete(Cart cart);
    Cart findById(int id);
    List<Cart> findCartByCustomerId(int id);
}
