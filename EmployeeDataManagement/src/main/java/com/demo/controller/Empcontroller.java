package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Employee;
import com.demo.repository.Employeeinterface;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Empcontroller
{

	@Autowired
	private Employeeinterface einterface;
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertdata")
	public Employee insertdata(@RequestBody Employee A)
	{
		return this.einterface.save(A);
	}

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updatedata")
	public Employee updatedata(@RequestBody Employee B)
	{
		return this.einterface.save(B);
	}
	

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deletedata")
	public void deletedata(@RequestBody Employee C)                    // update service
	{
		einterface.delete(C);
		
	}
	

	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewdata")
	public List<Employee> viewdata() {
		return (List<Employee>) einterface.findAll();
		
	}

}
	