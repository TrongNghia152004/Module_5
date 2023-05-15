package com.example.product_clothing_management.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "import_date")
    private String importDate;
    @Column(name = "quantity")
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "id_product_type")
    private ProductType productType;

    public Product() {
    }

    public Product(int id, String name, String importDate, int quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.importDate = importDate;
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

    public String getImportDate() {
        return importDate;
    }

    public void setImportDate(String importDate) {
        this.importDate = importDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
