package com.example.figureshopbe.service.cart.impl;

import com.example.figureshopbe.model.Cart;
import com.example.figureshopbe.repository.ICartRepository;
import com.example.figureshopbe.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public List<Cart> findAllCart(String name) {
        return iCartRepository.findCartByCustomer_AccountUser_NameAccount(name);
    }

    @Override
    public Cart existCart(int idCustomer, int idProduct) {
        return iCartRepository.findCartByCustomer_IdAndFigureProduct_Id(idCustomer, idProduct);
    }

    @Override
    public void decrease(int quantity) {

    }

    @Override
    public void increase(int quantity) {

    }

    @Override
    public void add(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void delete(Cart cart) {

    }

    @Override
    public Cart findById(int id) {
        return iCartRepository.findById(id).get();
    }

    @Override
    public List<Cart> findCartByCustomerId(int id) {
        return iCartRepository.findCartByCustomer_Id(id);
    }
}
