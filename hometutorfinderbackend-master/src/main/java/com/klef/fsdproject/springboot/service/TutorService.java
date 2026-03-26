package com.klef.fsdproject.springboot.service;

import java.util.List;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Tutor;

public interface TutorService {
	public Tutor checktutorlogin(String username,String password);
	  
	  public String addcourse(Course course);
	  public List<Course> viewcoursesbytutor(int tid);
	  
	  public Tutor getTutorById(int tid);
	  
	  public List<BookCourse> getbookingsbyTutor(int tid);
	  
	  public String updatebookingstatus(int id,String status);

	
	  

	
}
