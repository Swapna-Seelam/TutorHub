package com.klef.fsdproject.springboot.dto;

public class CourseDTO {
	public String accessmode;
    public String tutor;
    public String description;
    public int capacity;
    public double cost;
    public int tutor_id;
	public String getAccessmode() {
		return accessmode;
	}
	public void setAccessmode(String accessmode) {
		this.accessmode = accessmode;
	}
	public String getTutor() {
		return tutor;
	}
	public void setTutor(String tutor) {
		this.tutor = tutor;
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
	public int getTutor_id() {
		return tutor_id;
	}
	public void setTutor_id(int tutor_id) {
		this.tutor_id = tutor_id;
	}
	
}
