package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
//    @Transactional
//    @Query(value = "", nativeQuery = true)
    List<Cart> findCartByCustomer_AccountUser_NameAccount(String name);
    Cart findCartByCustomer_IdAndFigureProduct_Id(int idCustomer , int product);
    List<Cart> findCartByCustomer_Id(int id);
}
