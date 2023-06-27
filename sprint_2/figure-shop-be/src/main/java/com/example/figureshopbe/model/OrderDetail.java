package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_detail")
    private Integer id;
    @Column(name = "quantity_order")
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_product")
    private FigureProduct figureProduct;

    @ManyToOne
    @JoinColumn(columnDefinition = "id_order")
    private Order order;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Integer quantityOrder, FigureProduct figureProduct, Order order) {
        this.id = id;
        this.quantityOrder = quantityOrder;
        this.figureProduct = figureProduct;
        this.order = order;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
