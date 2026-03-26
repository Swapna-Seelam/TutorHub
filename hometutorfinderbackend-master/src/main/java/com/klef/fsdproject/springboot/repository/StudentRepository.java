package com.klef.fsdproject.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.klef.fsdproject.springboot.model.Student;

import jakarta.transaction.Transactional;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	public Student findByUsernameAndPassword(String username, String password);
	
	@Query("select s from Student s where s.gender=?1")
	  public List<Student> displaystudentbygender(String gender);
	  
	  @Modifying
	  @Transactional
	  @Query("delete from Student s where s.location=?1")
	  public int deletestudentbylocation(String location);
	  
	  @Query("select count(s) from Student s")
	  public long studentcount();
	
}


