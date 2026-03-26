package com.klef.fsdproject.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsdproject.springboot.model.Admin;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.model.Tutor;
import com.klef.fsdproject.springboot.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping("/checkadminlogin")
	  public ResponseEntity<?> checkadminlogin(@RequestBody Admin admin)
	  {
		  try 
	      {
	          Admin a = adminService.checkadminlogin(admin.getUsername(), admin.getPassword());

	          if (a!=null) 
	          {
	              return ResponseEntity.ok(a); // if login is successful
	          } 
	          else 
	          {
	              return ResponseEntity.status(401).body("Invalid Username or Password"); // if login is fail
	          }
	      } 
	      catch (Exception e) 
	      {
	    	  System.out.println(e.getMessage()); // check the error in the console using this for debugging purpose
	    	  
	          return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
	      }
	  }
	
	  @GetMapping("/viewallstudents")
	  public ResponseEntity<List<Student>> viewallstudents()
	  {
		 List<Student> students =  adminService.displaystudents();
		 
		 return ResponseEntity.ok(students); // 200 - success
	  }
	  @PostMapping("/addcoursetutor")
	  public ResponseEntity<String> addcoursetutor(@RequestBody Tutor tutor)
	  {
		   try
		   {
			  String output = adminService.addcoursetutor(tutor);
			  return ResponseEntity.ok(output); 
		   }
		   catch(Exception e)
		   {
			   
			   return ResponseEntity.status(500).body("Failed to Add Course Tutor ... !!"); 
		   }
	  }
	  @GetMapping("/viewallcoursetutors")
	  public ResponseEntity<List<Tutor>> viewallcoursetutors()
	  {
		 List<Tutor> coursetutors =  adminService.displaycoursetutors();
		 
		 return ResponseEntity.ok(coursetutors); 
	  }
	  
	  
	  @DeleteMapping("/deletestudent")
	  public ResponseEntity<String> deletestudent(@RequestParam int sid)
	  {
		  try
		   {
			  String output = adminService.deletestudent(sid);
			  return ResponseEntity.ok(output);
		   }
		   catch(Exception e)
		   {
			    return ResponseEntity.status(500).body("Failed to Delete Student ... !!"); 
		   }
	  }
	  @DeleteMapping("/deletetutor")
	  public ResponseEntity<String> deletetutor(@RequestParam int tid)
	  {
		  try
		   {
			  String output = adminService.deletetutor(tid);
			  return ResponseEntity.ok(output);
		   }
		   catch(Exception e)
		   {
			    return ResponseEntity.status(500).body("Failed to Delete Tutor ... !!"); 
		   }
	  }
	  @GetMapping("/studentcount")
	  public ResponseEntity<Long> getStudentCount()
	  {
	      long count = adminService.displaystudentcount();
	      return ResponseEntity.ok(count);
	  }
	  @GetMapping("/tutorcount")
	  public ResponseEntity<Long> getTutorCount()
	  {
	      long count = adminService.displaytutorcount();
	      return ResponseEntity.ok(count);
	  }

	  @GetMapping("/coursecount")
	  public ResponseEntity<Long> getCourseCount()
	  {
	      long count = adminService.displaycoursecount();
	      return ResponseEntity.ok(count);
	  }
	  
	  
}
