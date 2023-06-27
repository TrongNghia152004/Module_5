package com.example.figureshopbe.dto;

public class CartCreateDTO {

    private Integer quantity;
    private boolean status = true;
    private Integer figureProduct;

    public CartCreateDTO() {
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getFigureProduct() {
        return figureProduct;
    }

    public void setFigureProduct(Integer figureProduct) {
        this.figureProduct = figureProduct;
    }
}
