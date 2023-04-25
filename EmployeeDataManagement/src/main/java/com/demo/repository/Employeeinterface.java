package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Employee;

@Repository
public interface Employeeinterface extends JpaRepository<Employee,Integer>
{

}