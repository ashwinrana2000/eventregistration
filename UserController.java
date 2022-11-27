package com.springboot.Firsttask.controller;

import com.springboot.Firsttask.model.User;
import com.springboot.Firsttask.service.EventService;
import com.springboot.Firsttask.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user){
        User newUser= userService.addUser(user);
        if(newUser!=null){
            return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<String>("User couldn't be created", HttpStatus.BAD_REQUEST);
        }
    }


}
