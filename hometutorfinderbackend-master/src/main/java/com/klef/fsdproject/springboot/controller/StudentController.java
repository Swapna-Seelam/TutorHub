package com.klef.fsdproject.springboot.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin("*") 
public class StudentController {
	@Autowired
	   private StudentService studentService;
		
	   @GetMapping("/")
	   public String home()
	   {
		   return "Student";
	   }
	   @PostMapping("/registration")
	   public ResponseEntity<String> studentregistration(@RequestBody Student student)
	   {
		   try
		   {
			  String output = studentService.studentregistration(student);
			  return ResponseEntity.ok(output); // 200 - success
		   }
		   catch(Exception e)
		   {
			   //return ResponseEntity.status(500).body("Registration failed: " + e.getMessage());
			   return ResponseEntity.status(500).body("Student Registration Failed ...");
		   }
	   }
	   @PostMapping("/checkstudentlogin")
	   public ResponseEntity<?> checkstudentlogin(@RequestBody Student student) 
	   {
	       try 
	       {
	           Student s = studentService.checkstudentlogin(student.getUsername(), student.getPassword());

	           if (s!=null) 
	           {
	               return ResponseEntity.ok(s); // if login is successful
	           } 
	           else 
	           {
	               return ResponseEntity.status(401).body("Invalid Username or Password"); // if login is fail
	           }
	       } 
	       catch (Exception e) 
	       {
	           return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
	       }
	   }
	   @PutMapping("/updateprofile")
	   public ResponseEntity<String> studentupdateprofile(@RequestBody Student student)
	   {
	 	  try
	 	   {
	 		  System.out.println(student.toString());
	 		  String output = studentService.studentupdateprofile(student);
	 		  return ResponseEntity.ok(output);
	 	   }
	 	   catch(Exception e)
	 	   {
	 		    System.out.println(e.getMessage());
	 		    return ResponseEntity.status(500).body("Failed to Update Student ... !!"); 
	 	   }
	   }
	   @GetMapping("/viewallcourses")
	   public ResponseEntity<List<Course>> viewallcourses()
	   {
	 	 List<Course> events =  studentService.viewallcourses();
	 	 
	 	 return ResponseEntity.ok(events); 
	   }
	   
	   @PostMapping("/bookcourse")
	   public ResponseEntity<String> bookEvent(@RequestBody BookCourse bookCourse) 
	   {
	      try
	      {
	    	  int bookingId = new Random().nextInt(900000) + 100000; 
	          bookCourse.setId(bookingId);

	          Student student = studentService.getStudentById(bookCourse.getStudent().getId());
	     Course course = studentService.getCourseById(bookCourse.getCourse().getId());
	         

	          bookCourse.setStudent(student);
	          bookCourse.setCourse(course);

	          
	          bookCourse.setStatus("BOOKED");

	          String output = studentService.bookcourse(bookCourse);

	          return ResponseEntity.ok(output); 
	      }
	      catch (Exception e) 
	      {
	    	  return ResponseEntity.status(500).body("Failed to Book a Course: " + e.getMessage());
		  }
	   }

	   @GetMapping("/bookedcourses/{sid}")
	   public ResponseEntity<List<BookCourse>> getCoursesByStudent(@PathVariable int sid) 
	   {
	       List<BookCourse> bookedcourses =  studentService.getbookedcoursesByStudent(sid);
	   	 
	   	   return ResponseEntity.ok(bookedcourses); 
	   }  
}
