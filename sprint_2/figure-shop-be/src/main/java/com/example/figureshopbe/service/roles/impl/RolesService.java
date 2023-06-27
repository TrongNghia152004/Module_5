package com.example.figureshopbe.service.roles.impl;

import com.example.figureshopbe.model.Roles;
import com.example.figureshopbe.repository.IRolesRepository;
import com.example.figureshopbe.service.roles.IRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesService implements IRolesService {
    @Autowired
    IRolesRepository rolesRepository;
    @Override
    public Roles findRolesByName(String name) {
        return rolesRepository.findByNameRoles(name);
    }
}
