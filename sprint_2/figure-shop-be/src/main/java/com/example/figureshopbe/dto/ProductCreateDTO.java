package com.example.figureshopbe.dto;

public class ProductCreateDTO {
    private String name;
    private String imgFigure;
    private Double price;
    private String material;
    private String height;
    private String weight;
    private Integer quantity;
    private Integer productType;

    public ProductCreateDTO() {
    }

    public ProductCreateDTO(String name, String imgFigure, Double price, String material, String height, String weight, Integer quantity, Integer productType) {
        this.name = name;
        this.imgFigure = imgFigure;
        this.price = price;
        this.material = material;
        this.height = height;
        this.weight = weight;
        this.quantity = quantity;
        this.productType = productType;
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

    public Integer getProductType() {
        return productType;
    }

    public void setProductType(Integer productType) {
        this.productType = productType;
    }
}
