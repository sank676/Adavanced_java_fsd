package com.UST.studentservicesfeign.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentRestController {

    @Autowired
    private BookRestConsumer bookRestConsumer;

    @GetMapping("/data")
    public String getStudentInfo(){
        System.out.println(bookRestConsumer.getClass().getName());
        return "Accessing from STUDENT-SERVICE ==>" + bookRestConsumer.getBookData();
    }

    @GetMapping("/allBooks")
    public String getBookInfo(){
        return "Accessing from STUDENT-SERVICE ==>" + bookRestConsumer.getAllBooks();
    }

    @GetMapping("/getOneBook/{id}")
    public String getOneBookForStd(@PathVariable Integer id){
        return "Accessing from STUDENT-SERVICE ==>" + bookRestConsumer.getBookById(id);
    }

    @GetMapping("/entityData")
    public String printEntityData(){
        ResponseEntity<String> resp = bookRestConsumer.getEntityData();
        return "Accessing from STUDENT-SERVICE ==>" + resp.getBody()+ ", status is: " + resp.getStatusCode();
    }
}
