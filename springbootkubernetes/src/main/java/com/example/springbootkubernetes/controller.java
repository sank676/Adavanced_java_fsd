package com.example.springbootkubernetes;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/wel")
public class controller {
    @GetMapping("/welcome")
    public String welcome(){
        return "welcome to ooty... nice to meet you!!!";
    }
}
