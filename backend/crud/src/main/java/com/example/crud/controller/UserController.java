package com.example.crud.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.model.User;
import com.example.crud.service.UserService;

@RestController
public class UserController {

	@Autowired 
	private UserService userService;
	
	   @PostConstruct
	    public void initRoleAndUser() {
	        userService.initRoleAndUser();
	    } 
	
	@PostMapping("/createNewUser")
	public User createNewUser(@RequestBody User user ) {
		return userService.createNewUser(user);
	}

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
}
