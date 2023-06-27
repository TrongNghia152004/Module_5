package com.example.figureshopbe.service.accountUser.impl;

import com.example.figureshopbe.model.AccountUser;
import com.example.figureshopbe.repository.IAccountUserRepository;
import com.example.figureshopbe.service.accountUser.IAccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class accountUserService implements IAccountUserService {
    @Autowired
    private IAccountUserRepository accountUserRepository;

    @Override
    public AccountUser findAccountUserByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        return accountUser;
    }

    @Override
    public Boolean existByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        if (accountUser != null) {
            return true;
        }
        return false;
    }

    @Override
    public AccountUser saveAccountUser(AccountUser accountUser) {
        return accountUserRepository.save(accountUser);
    }

    @Override
    public AccountUser findAccountUserByEmail(String email) {
        return accountUserRepository.findAccountUserByEmail(email);
    }
    @Override
    public AccountUser findById(int id) {
        return accountUserRepository.findAccountUserById(id);
    }

}
