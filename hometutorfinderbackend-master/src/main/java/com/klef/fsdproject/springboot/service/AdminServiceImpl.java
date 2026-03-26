package com.klef.fsdproject.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsdproject.springboot.model.Admin;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.model.Tutor;
import com.klef.fsdproject.springboot.repository.AdminRepository;
import com.klef.fsdproject.springboot.repository.CourseRepository;
import com.klef.fsdproject.springboot.repository.StudentRepository;
import com.klef.fsdproject.springboot.repository.TutorRepository;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private TutorRepository tutorRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Override
	public Admin checkadminlogin(String username, String password) 
	{
		return adminRepository.findByUsernameAndPassword(username, password);
	}
	@Override
	public List<Student> displaystudents() 
	{
		return studentRepository.findAll();
	}
	@Override
	public String deletestudent(int sid) 
	{
	    Optional<Student> student = studentRepository.findById(sid);
	    
	    if (student.isPresent()) 
	    {	
	        studentRepository.deleteById(sid);
	        return "Student Deleted Successfully";
	    } 
	    else 
	    {
	        return "Student ID Not Found";
	    }
	}
	  @Override
	  public long displaystudentcount() 
		{
			return studentRepository.count();
		}
	@Override
	public String addcoursetutor(Tutor tutor) {
		tutorRepository.save(tutor);
		return "Course Tutor Added Successfully";
	}
	@Override
	public List<Tutor> displaycoursetutors() {
		return tutorRepository.findAll();
	}
	@Override
	public String deletetutor(int tid) {
Optional<Tutor> tutor = tutorRepository.findById(tid);
	    
	    if (tutor.isPresent()) 
	    {	
	        tutorRepository.deleteById(tid);
	        return "Tutor Deleted Successfully";
	    } 
	    else 
	    {
	        return "Tutor ID Not Found";
	    }
	}
	@Override
	public long displaytutorcount() {
		return tutorRepository.count();
	}
	@Override
	public long displaycoursecount() {
		return courseRepository.count();
	}

	  
	}
	





