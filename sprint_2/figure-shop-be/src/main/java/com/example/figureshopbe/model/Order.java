package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String totalPayment;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_user")
    private Customer customer;

    public Order() {
    }

    public Order(Integer id, String totalPayment, Customer customer) {
        this.id = id;
        this.totalPayment = totalPayment;
        this.customer = customer;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(String totalPayment) {
        this.totalPayment = totalPayment;
    }

}
