package com.klef.fsdproject.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Tutor;
import com.klef.fsdproject.springboot.repository.BookCourseRepository;
import com.klef.fsdproject.springboot.repository.CourseRepository;
import com.klef.fsdproject.springboot.repository.TutorRepository;

@Service
public class TutorServiceImpl implements TutorService{

	@Autowired
    private TutorRepository tutorRepository;
	
	@Autowired
    private CourseRepository courseRepository;
	
	@Autowired
	private BookCourseRepository bookCourseRepository;

	@Override
	public Tutor checktutorlogin(String username, String password) {
		return tutorRepository.findByUsernameAndPassword(username, password);
		
	}

	@Override
	public String addcourse(Course course) {
		courseRepository.save(course);
		return "Course Added Successfully";
	}

	@Override
	public List<Course> viewcoursesbytutor(int tid) 
	{
		Tutor tutor = tutorRepository.findById(tid).orElse(null);
		 return courseRepository.findByTutor(tutor);
	}

	@Override
	public Tutor getTutorById(int tid) 
	{
		 return tutorRepository.findById(tid).get();
	}
	
	@Override
	public List<BookCourse> getbookingsbyTutor(int tid) 
	{
		return bookCourseRepository.getbookingsbyTutor(tid);
	
	}

	@Override
	public String updatebookingstatus(int id, String status) 
	{
		bookCourseRepository.updateStatusById(status,id);
		return "Booking Status Updated Successfully";
	}
	
	
	
}
