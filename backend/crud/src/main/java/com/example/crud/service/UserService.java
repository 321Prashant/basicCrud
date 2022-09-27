package com.example.crud.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.crud.model.Role;
import com.example.crud.model.User;
import com.example.crud.repository.RoleDao;
import com.example.crud.repository.UserDao;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	@Autowired
	private RoleDao roleDao;
	@Autowired
    private PasswordEncoder passwordEncoder;

	
	public User createNewUser(User user) {
		Role role = roleDao.findById("user").get();
		Set<Role> roleSet = new HashSet<>();
		roleSet.add(role);
		user.setRole(roleSet);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		return userDao.save(user);  
	}
	 public void initRoleAndUser() {

	        Role adminRole = new Role();
	        adminRole.setRoleName("Admin");
	        adminRole.setRoledescription("Admin role");
	        roleDao.save(adminRole);

	        Role userRole = new Role();
	        userRole.setRoleName("User");
	        userRole.setRoledescription("Default role for newly created record");
	        roleDao.save(userRole);

	        User adminUser = new User();
	        adminUser.setUserName("admin123");
	        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
	        adminUser.setFirstName("admin");
	        adminUser.setFirstName("admin");
	        Set<Role> adminRoles = new HashSet<>();
	        adminRoles.add(adminRole);
	        adminUser.setRole(adminRoles);
	        userDao.save(adminUser);

	        User user = new User();
	        user.setUserName("raj123");
	        user.setUserPassword(getEncodedPassword("raj@123"));
	        user.setFirstName("raj");
	        user.setLastName("sharma");
	        Set<Role> userRoles = new HashSet<>();
	        userRoles.add(userRole);
	        user.setRole(userRoles);
	        userDao.save(user);
	    }
	 public User registerNewUser(User user) {
	        Role role = roleDao.findById("User").get();
	        Set<Role> userRoles = new HashSet<>();
	        userRoles.add(role);
	        user.setRole(userRoles);
	        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

	        return userDao.save(user);
	    }

	    public String getEncodedPassword(String password) {
	        return passwordEncoder.encode(password);
	    }

	
}
