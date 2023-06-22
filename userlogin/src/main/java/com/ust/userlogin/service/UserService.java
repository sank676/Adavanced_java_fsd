package com.ust.userlogin.service;

import com.ust.userlogin.model.User;
import com.ust.userlogin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

//    private static final SecureRandom secureRandom = new SecureRandom();
//    private static  final Base64.Encoder base64encoder = Base64.getEncoder();
    public User register(User user) {
        if(checkUserExist(user))
            return null;
        else

//        user.setToken(generateToken());
        return  userRepository.save(user);
    }

//    private String generateToken() {
//        byte[]token =  new byte[24];
//        secureRandom.nextBytes(token);
//        return  base64encoder.encodeToString(token);
//    }


    private boolean checkUserExist(User user) {
        User existingUser = userRepository.findById(user.getUserName()).orElse(null);
        if(existingUser == null)
            return false;
        return true;
    }
    public User login(User user) {
        User existingUser = userRepository.findById(user.getUserName()).orElse(null);
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            existingUser.setPassword("");
            return existingUser;
        }

//    public User login(User user) {
//        User existingUser = userRepository.findById(user.getUserName()).orElse(null);
//        if(existingUser.getUserName().equals(user.getUserName())&&
//                existingUser.getPassword().equals(user.getPassword())&&
//                        existingUser.equals(user)){
//            existingUser.setPassword("");
//            return existingUser;
//        }


        return null;
    }
}
