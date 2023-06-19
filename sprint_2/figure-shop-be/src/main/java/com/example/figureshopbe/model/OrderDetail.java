package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_detail")
    private Integer idOrderDetail;
    @Column(name = "quantity_order")
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(name = "id_product")
    private FigureProduct figureProduct;

    @ManyToOne
    @JoinColumn(name = "id_order")
    private Order order;

    public OrderDetail() {
    }

    public OrderDetail(Integer idOrderDetail, Integer quantityOrder, FigureProduct figureProduct, Order order) {
        this.idOrderDetail = idOrderDetail;
        this.quantityOrder = quantityOrder;
        this.figureProduct = figureProduct;
        this.order = order;
    }

    public Integer getIdOrderDetail() {
        return idOrderDetail;
    }

    public void setIdOrderDetail(Integer idOrderDetail) {
        this.idOrderDetail = idOrderDetail;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public FigureProduct getFigureProduct() {
        return figureProduct;
    }

    public void setFigureProduct(FigureProduct figureProduct) {
        this.figureProduct = figureProduct;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
