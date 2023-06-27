package com.example.figureshopbe.repository;

import com.example.figureshopbe.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolesRepository extends JpaRepository<Roles, Integer> {
    Roles findByNameRoles(String name);
}