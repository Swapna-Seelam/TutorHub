package com.klef.fsdproject.springboot.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name="student_table")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="student_id")
    private int id;
    @Column(name="student_name",length = 50,nullable = false)
    private String name;
    @Column(name="student_gender",length = 10,nullable = false)
    private String gender;
    @Column(name="student_dob",length = 20,nullable = false)
    private String dob;
    @Column(name="student_email",length = 50,nullable = false,unique=true)
    private String email;
    @Column(name="student_uname",length = 50,nullable = false,unique=true)
    private String username;
    @Column(name="student_pwd",length = 50,nullable = false)
    private String password;
    @Column(name="student_contactno",length = 20,nullable = false,unique=true)
    private String contactno;
    @Column(name="student_location",length = 50,nullable = false)
    private String location;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookCourse> bookCourses = new ArrayList<>();

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
}




	
	