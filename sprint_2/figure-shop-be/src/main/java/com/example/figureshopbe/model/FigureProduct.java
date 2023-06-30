package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "figure_product")
public class FigureProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String imgFigure;
    private Double price;
    private String material;
    private String height;
    private String weight;
    private Integer quantity;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_product_type")
    private ProductType productType;

    public FigureProduct() {
    }

    public FigureProduct(int id, String name, String imgFigure, Double price, String material, String height, String weight, Integer quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.imgFigure = imgFigure;
        this.price = price;
        this.material = material;
        this.height = height;
        this.weight = weight;
        this.quantity = quantity;
        this.productType = productType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgFigure() {
        return imgFigure;
    }

    public void setImgFigure(String imgFigure) {
        this.imgFigure = imgFigure;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
