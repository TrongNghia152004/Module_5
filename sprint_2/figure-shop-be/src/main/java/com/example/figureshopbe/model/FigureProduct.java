package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "figure_product")
public class FigureProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduct;
    private String name;
    private String imgFigure;
    private String price;
    private String material;
    private String height;
    private String weight;
    private String export;
    @ManyToOne
    @JoinColumn(name = "id_product_type")
    private ProductType productType;

    public FigureProduct() {
    }

    public FigureProduct(int idProduct, String name, String imgFigure, String price, String material, String height, String weight, String export, ProductType productType) {
        this.idProduct = idProduct;
        this.name = name;
        this.imgFigure = imgFigure;
        this.price = price;
        this.material = material;
        this.height = height;
        this.weight = weight;
        this.export = export;
        this.productType = productType;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
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

    public String getExport() {
        return export;
    }

    public void setExport(String export) {
        this.export = export;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
