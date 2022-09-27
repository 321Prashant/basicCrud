package com.example.crud.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

	@Id
	private String roleName;
	private String roledescription;
	
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Role(String roleName, String roledescription) {
		super();
		this.roleName = roleName;
		this.roledescription = roledescription;
	}

	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public String getRoledescription() {
		return roledescription;
	}
	public void setRoledescription(String roledescription) {
		this.roledescription = roledescription;
	}
	
}
