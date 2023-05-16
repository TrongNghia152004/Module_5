package com.example.product_clothing_management.dto;

public class ProductDTO {
    private int id;
    private String name;
    private String importDate;
    private int quantity;
    private ProductTypeDTO productTypeDTO;

    public ProductDTO() {
    }

    public ProductDTO(int id, String name, String importDate, int quantity, ProductTypeDTO productTypeDTO) {
        this.id = id;
        this.name = name;
        this.importDate = importDate;
        this.quantity = quantity;
        this.productTypeDTO = productTypeDTO;
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

    public ProductTypeDTO getProductTypeDTO() {
        return productTypeDTO;
    }

    public void setProductTypeDTO(ProductTypeDTO productTypeDTO) {
        this.productTypeDTO = productTypeDTO;
    }
}
