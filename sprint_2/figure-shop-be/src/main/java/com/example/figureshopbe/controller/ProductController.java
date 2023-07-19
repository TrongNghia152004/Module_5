package com.example.figureshopbe.controller;

import com.example.figureshopbe.dto.ProductCreateDTO;
import com.example.figureshopbe.dto.ProductUpdateDTO;
import com.example.figureshopbe.model.FigureProduct;
import com.example.figureshopbe.service.product.IFigureProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/product")
public class ProductController {
    @Autowired
    private IFigureProductService iFigureProductService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<FigureProduct> showListProduct(@RequestParam(name = "name", defaultValue = "") String name,
                                               @RequestParam(name = "idType", defaultValue = "0") Integer idType,
                                               @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC, size = 8) Pageable pageable) {
        return iFigureProductService.findProductByTypeProduct(name, idType, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        FigureProduct figureProduct = iFigureProductService.findById(id);
        return new ResponseEntity<>(figureProduct, HttpStatus.OK);
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    public ResponseEntity<?> createProduct(HttpServletRequest request , @RequestBody ProductCreateDTO productCreateDTO) {
        FigureProduct figureProduct = new FigureProduct();
        BeanUtils.copyProperties(productCreateDTO , figureProduct);
        iFigureProductService.save(figureProduct);
        return new ResponseEntity<>(figureProduct, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(HttpServletRequest request , @RequestBody ProductUpdateDTO productUpdateDTO) {
        FigureProduct figureProduct = iFigureProductService.findById(productUpdateDTO.getId());
        BeanUtils.copyProperties(productUpdateDTO , figureProduct);
        iFigureProductService.save(figureProduct);
        return new ResponseEntity<>(figureProduct, HttpStatus.OK);
    }
}
