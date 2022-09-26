package com.example.crud.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.Exception.EmployeeException;
import com.example.crud.model.EmployeeEntity;
import com.example.crud.repository.EmployeeRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Getpath")
public class EmployeeController {

	@Autowired
	private EmployeeRepository empRepository;
	@GetMapping("/getAllEmployees")
	public List<EmployeeEntity> getAllEmployees(EmployeeEntity empEntity) {
		return empRepository.findAll();
	}
	@PostMapping("/saveEmployee")
	public EmployeeEntity saveAllEmployee(@RequestBody EmployeeEntity employee) {
		return empRepository.save(employee);
	}
	@GetMapping("/getById/{id}")
	public ResponseEntity<EmployeeEntity> getById(@PathVariable Integer id) {
		EmployeeEntity emp = empRepository.findById(id).orElseThrow(()->new EmployeeException("Not found"+id));
		return ResponseEntity.ok(emp);
	}
	@CrossOrigin(origins = "http://localhost:4200/")
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<EmployeeEntity> updateThatEmployee(@PathVariable Integer id, @RequestBody EmployeeEntity empEntity){
		EmployeeEntity emp = empRepository.findById(id).orElseThrow(()->new EmployeeException("Not found"+id));
		
		emp.setFirstName(empEntity.getFirstName());
		emp.setLstName(empEntity.getLstName());
		emp.setEmail(empEntity.getEmail());
		EmployeeEntity empUpdated = empRepository.save(emp);
		return ResponseEntity.ok(empUpdated);
	}
	
	@DeleteMapping("/delete/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Integer id) {
			EmployeeEntity emp = empRepository.findById(id).orElseThrow(()->new EmployeeException("Not found"+id));
			empRepository.delete(emp);
			 Map<String, Boolean> response =new HashMap<>();
			 response.put("Deleted"+id,Boolean.TRUE);
			return ResponseEntity.ok(response);
		
	}
}

