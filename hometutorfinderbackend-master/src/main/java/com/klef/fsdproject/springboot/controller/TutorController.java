package com.klef.fsdproject.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsdproject.springboot.dto.CourseDTO;
import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Tutor;
import com.klef.fsdproject.springboot.service.TutorService;

@RestController
@RequestMapping("/tutor")
@CrossOrigin("*")
public class TutorController {

 @Autowired
 private TutorService tutorService;
 
 @PostMapping("/checktutorlogin")
 public ResponseEntity<?> checktutorlogin(@RequestBody Tutor tutor) 
 {
     try 
     {
         Tutor t = tutorService.checktutorlogin(tutor.getUsername(), tutor.getPassword());

         if (t!=null) 
         {
             return ResponseEntity.ok(t); 
         } 
         else 
         {
             return ResponseEntity.status(401).body("Invalid Username or Password");
         }
     } 
     catch (Exception e) 
     {
         return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
     }
 }

 @PostMapping("/addcourse")
 public ResponseEntity<String> addcourse(@RequestBody CourseDTO dto) 
 {
     try 
     {
         Tutor tutor = tutorService.getTutorById(dto.tutor_id);

         Course course = new Course();
         course.setAccessmode(dto.accessmode);
         course.setTitle(dto.tutor);
         course.setDescription(dto.description);
         course.setCapacity(dto.capacity);
         course.setCost(dto.cost);
         course.setTutor(tutor);

         String output = tutorService.addcourse(course);
         return ResponseEntity.ok(output); 
     } 
     catch (Exception e) 
     { 
  	   return ResponseEntity.status(500).body("Failed to Add Course: " + e.getMessage());
     }
 }
 
 @GetMapping("/viewcoursesbytutor/{id}")
 public ResponseEntity<List<Course>> viewcoursesbytutor(@PathVariable int id) 
 {
     List<Course> courses = tutorService.viewcoursesbytutor(id);
     return ResponseEntity.ok(courses);
 }


 @GetMapping("/viewbookingsbytutor/{tutorId}")
 public ResponseEntity<List<BookCourse>> viewBookingsByTutor(@PathVariable int tutorId) 
 { 
     List<BookCourse> courses = tutorService.getbookingsbyTutor(tutorId);
     return ResponseEntity.ok(courses);
 }

 @GetMapping("/updatebookingstatus")
 public ResponseEntity<String> updateBookingStatus(@RequestParam int id,@RequestParam String status) 
 { 
     try
     {
  	   String output = tutorService.updatebookingstatus(id, status);
  	   return ResponseEntity.ok(output);
     }
     catch (Exception e) 
     {
  	   System.out.println(e.getMessage());
  	   return ResponseEntity.status(500).body("Error:" + e.getMessage());
	   }
 }


	
}
