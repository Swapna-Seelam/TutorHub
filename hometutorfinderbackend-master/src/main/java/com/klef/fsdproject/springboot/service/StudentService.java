package com.klef.fsdproject.springboot.service;

import java.util.List;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Student;

public interface StudentService {
	public String studentregistration(Student student);
	public Student checkstudentlogin(String username,String password);
	public String studentupdateprofile(Student student);
	  
	  public List<Course> viewallcourses();
	public Student getStudentById(int sid);
	public Course getCourseById(int cid);

	public String bookcourse(BookCourse bookCourse);
	  public List<BookCourse> getbookedcoursesByStudent(int sid);
	  
	
}
