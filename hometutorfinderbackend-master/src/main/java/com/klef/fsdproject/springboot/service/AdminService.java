package com.klef.fsdproject.springboot.service;

import java.util.List;

import com.klef.fsdproject.springboot.model.Admin;
import com.klef.fsdproject.springboot.model.Student;
import com.klef.fsdproject.springboot.model.Tutor;

public interface AdminService {

	public Admin checkadminlogin(String username, String password);
	
	public String addcoursetutor(Tutor tutor);
	public List<Tutor> displaycoursetutors();
	public String deletetutor(int tid);
	  public List<Student> displaystudents();
	  public String deletestudent(int sid);
	  public long displaystudentcount();
	  public long displaytutorcount();
	  public long displaycoursecount();


}
