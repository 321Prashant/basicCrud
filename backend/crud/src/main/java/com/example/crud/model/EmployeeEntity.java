package com.example.crud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EmployeeEntity {


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer Id;
	private String firstName;
	private String lstName;
	private String email;
	
	
	
	public EmployeeEntity() {
	
	}
	public EmployeeEntity( String firstName, String lstName, String email) {
		super();
		
		this.firstName = firstName;
		this.lstName = lstName;
		this.email = email;
	}
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLstName() {
		return lstName;
	}
	public void setLstName(String lstName) {
		this.lstName = lstName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
