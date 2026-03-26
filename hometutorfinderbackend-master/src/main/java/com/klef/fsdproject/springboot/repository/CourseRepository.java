package com.klef.fsdproject.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Tutor;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer>{
	public List<Course> findByTutor(Tutor tutor);
	
	 @Query("select count(c) from Course c")
	 public long coursecount();

}
