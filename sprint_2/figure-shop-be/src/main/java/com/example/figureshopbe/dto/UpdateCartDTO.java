package com.example.figureshopbe.dto;

public class UpdateCartDTO {
    private Integer quantity;
    private Integer figureProduct;

    public UpdateCartDTO() {
    }

    public UpdateCartDTO(Integer quantity, Integer figureProduct) {
        this.quantity = quantity;
        this.figureProduct = figureProduct;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getFigureProduct() {
        return figureProduct;
    }

    public void setFigureProduct(Integer figureProduct) {
        this.figureProduct = figureProduct;
    }
}
