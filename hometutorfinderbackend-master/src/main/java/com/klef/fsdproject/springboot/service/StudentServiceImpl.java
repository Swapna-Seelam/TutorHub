package com.klef.fsdproject.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Service;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.repository.BookCourseRepository;
import com.klef.fsdproject.springboot.repository.CourseRepository;
import com.klef.fsdproject.springboot.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
    private StudentRepository studentRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private BookCourseRepository bookCourseRepository;

	
	
	@Override
	public String studentregistration(Student student) 
	{
		studentRepository.save(student);
		return "Student Registered Successfully";
	}

	@Override
	public Student checkstudentlogin(String username, String password) 
	{
		return studentRepository.findByUsernameAndPassword(username, password);
	}
	@Override
	public Student getStudentById(int sid) 
	{
		return studentRepository.findById(sid).orElse(null);
	}

	@Override
	public String studentupdateprofile(Student student) {
   Optional<Student> object	= studentRepository.findById(student.getId());
		
		String msg = null;
			  
			  if(object.isPresent())
			  {
				   Student s = object.get();
				  
				  s.setName(student.getName());
				  s.setDob(student.getDob());
				  s.setContactno(student.getContactno());
				  s.setEmail(student.getEmail());
				  s.setPassword(student.getPassword());
				  s.setLocation(student.getLocation());
				  
				  studentRepository.save(student);
				  
				  msg = "Student Profile Updated Successfully";
			  }
			  else
			  {
				  msg = "Student ID Not Found to Update";
			  }
			  return msg;
	}

	@Override
	public List<Course> viewallcourses() {
		 return courseRepository.findAll();
			
	}

	@Override
	public String bookcourse(BookCourse bookCourse) {
		bookCourseRepository.save(bookCourse);
		return "Course Booked Successfully";
	}

	@Override
	public List<BookCourse> getbookedcoursesByStudent(int sid) {
		
		Student student = studentRepository.findById(sid).orElse(null);
		return bookCourseRepository.findByStudent(student);	
		
	}

	@Override
	public Course getCourseById(int cid) {
		return courseRepository.findById(cid).orElse(null);
	}
}
