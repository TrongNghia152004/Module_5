package com.example.product_clothing_management.controller;

import com.example.product_clothing_management.dto.ProductDTO;
import com.example.product_clothing_management.model.Product;
import com.example.product_clothing_management.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Product> showListBook(@RequestParam(required = false, defaultValue = "") String name, @RequestParam(required = false, defaultValue = "") String productType, @PageableDefault(size = 3) Pageable pageable) {
        Page<Product> productPage = iProductService.findByName(name, productType, pageable);
        for (Product product : productPage.getContent()) {
            SimpleDateFormat initialDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat newDateFormat = new SimpleDateFormat("dd/MM/yyyy");
            String importedDate = product.getImportDate();
            String importedDateInNewFormat = "";
            try {
                Date date = initialDateFormat.parse(importedDate);
                importedDateInNewFormat = newDateFormat.format(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            product.setImportDate(importedDateInNewFormat);
        }

        return productPage;


    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail")
    public Product detail(@RequestParam(required = false) Integer id) {
        return iProductService.findByIdProduct(id);
    }

    @PostMapping("")
    public ResponseEntity<?> create(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            iProductService.create(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<?> edit(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            iProductService.edit(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@RequestParam(required = false) Integer id) {
        iProductService.deleteProduct(id);
    }
}
