package com.example.figureshopbe.service.roles;


import com.example.figureshopbe.model.Roles;

public interface IRolesService {
    Roles findRolesByName(String name);
}
