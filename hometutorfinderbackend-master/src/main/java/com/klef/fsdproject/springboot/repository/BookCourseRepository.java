package com.klef.fsdproject.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.model.Tutor;

import jakarta.transaction.Transactional;

@Repository
public interface BookCourseRepository extends JpaRepository<BookCourse, Integer>{
	
	public List<BookCourse> findByStudent(Student student);
	  
	  @Query("SELECT b from BookCourse b where b.course.tutor.id = ?1")
	  public List<BookCourse> getbookingsbyTutor(int tid);
	  
	  @Modifying
	  @Transactional
	  @Query("UPDATE BookCourse b SET b.status = ?1 WHERE b.id = ?2")
	  public int updateStatusById(String status,int id);

	

}
