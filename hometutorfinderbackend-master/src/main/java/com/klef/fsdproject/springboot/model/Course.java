package com.klef.fsdproject.springboot.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "course_table")
public class Course {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment
	  private int id;
	  @Column(nullable = false,length = 100)
	  private String accessmode;
	  @Column(nullable = false,length = 100)
	  private String title;
	  @Column(nullable = false,length = 500)
	  private String description;
	  @Column(nullable = false)
	  private int capacity;
	  @Column(nullable = false)
	  private double cost;
	  
	  @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.REMOVE})
	  @JoinColumn(name = "tutor_id") 
	  private Tutor tutor;
	  @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
	  private List<BookCourse> bookings = new ArrayList<>();


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAccessmode() {
		return accessmode;
	}

	public void setAccessmode(String accessmode) {
		this.accessmode = accessmode;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public Tutor getTutor() {
		return tutor;
	}

	public void setTutor(Tutor tutor) {
		this.tutor = tutor;
	}
}
