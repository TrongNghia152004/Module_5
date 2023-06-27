package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCart;
    private Integer quantity;
    private boolean status = true;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_customer")
    private Customer customer;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_product")
    private FigureProduct figureProduct;

    public Cart() {
    }

    public Cart(Integer idCart, Integer quantity, boolean status, Customer customer, FigureProduct figureProduct) {
        this.idCart = idCart;
        this.quantity = quantity;
        this.status = status;
        this.customer = customer;
        this.figureProduct = figureProduct;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Integer getIdCart() {
        return idCart;
    }

    public void setIdCart(Integer idCart) {
        this.idCart = idCart;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Customer getCustomer() {
        return customer;
    }

    public FigureProduct getFigureProduct() {
        return figureProduct;
    }

    public void setFigureProduct(FigureProduct figureProduct) {
        this.figureProduct = figureProduct;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
