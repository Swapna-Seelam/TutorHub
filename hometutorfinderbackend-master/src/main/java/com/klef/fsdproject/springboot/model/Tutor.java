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
@Table(name="tutor_table")
public class Tutor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tutor_id")
    private int id;
    @Column(length = 50,nullable = false)
    private String name;
    @Column(length = 10,nullable = false)
    private String gender;
    @Column(length = 20,nullable = false)
    private String dob;
    @Column(length = 50,nullable = false,unique=true)
    private String email;
    @Column(length = 50,nullable = false,unique=true)
    private String username;
    @Column(length = 50,nullable = false)
    private String password;
    @Column(length = 20,nullable = false,unique=true)
    private String mobileno;
    @Column(length = 20,nullable = false,unique=true)
    private String location;
    @Column(length = 50,nullable = false)
    private String subject_name;
    
    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Course> courses = new ArrayList<>();

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
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSubject_name() {
		return subject_name;
	}
	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}
}
