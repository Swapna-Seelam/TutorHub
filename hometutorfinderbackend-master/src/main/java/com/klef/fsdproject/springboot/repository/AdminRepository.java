package com.klef.fsdproject.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.fsdproject.springboot.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, String>{

	 public Admin findByUsernameAndPassword(String Username, String password);

}
