package com.example.figureshopbe.security.userPrincipal;

import com.example.figureshopbe.model.AccountUser;
import com.example.figureshopbe.service.accountUser.IAccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private IAccountUserService accountUserService;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            AccountUser accountUser = accountUserService.findAccountUserByNameAccount(username);
            return UserPrinciple.build(accountUser);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}
