package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.FigureProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IFigureProductRepository extends JpaRepository<FigureProduct, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM figure_product \n" +
            "WHERE (:name IS NULL OR figure_product.name LIKE CONCAT('%', :name, '%'))\n" +
            "AND (:idType = 0 OR figure_product.product_type_id = :idType)", nativeQuery = true)
    Page<FigureProduct> findAllFigureProduct(@Param("name") String name, @Param("idType") Integer idType, Pageable pageable);
    FigureProduct findFigureProductById(int id);
}
