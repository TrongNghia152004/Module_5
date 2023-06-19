package com.example.figureshopbe.model;

import javax.persistence.*;

@Entity
@Table(name = "product_type")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProductType;
    private String name;

    public ProductType() {
    }

    public ProductType(Integer idProductType, String name) {
        this.idProductType = idProductType;
        this.name = name;
    }

    public Integer getIdProductType() {
        return idProductType;
    }

    public void setIdProductType(Integer idProductType) {
        this.idProductType = idProductType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
