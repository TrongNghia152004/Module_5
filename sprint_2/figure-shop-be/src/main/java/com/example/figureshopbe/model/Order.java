package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_order;
    private String totalPayment;
    @ManyToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;

    public Order() {
    }

    public Order(Integer id_order, String totalPayment, Customer customer) {
        this.id_order = id_order;
        this.totalPayment = totalPayment;
        this.customer = customer;
    }

    public Integer getId_order() {
        return id_order;
    }

    public void setId_order(Integer id_order) {
        this.id_order = id_order;
    }

    public String getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(String totalPayment) {
        this.totalPayment = totalPayment;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
