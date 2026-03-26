package com.klef.fsdproject.springboot.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookcourse_table")
public class BookCourse {

	@Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @Column(nullable = false)
    private String startdate;

    @Column(nullable = false)
    private String enddate;

    @Column(nullable = false)
    private int bookedcapacity;

    @Column(nullable = false)
    private String status;

    @CreationTimestamp
    @Column(nullable = false)
    private LocalDateTime bookingtime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	public int getBookedcapacity() {
		return bookedcapacity;
	}

	public void setBookedcapacity(int bookedcapacity) {
		this.bookedcapacity = bookedcapacity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getBookingtime() {
		return bookingtime;
	}

	public void setBookingtime(LocalDateTime bookingtime) {
		this.bookingtime = bookingtime;
	}

	@Override
	public String toString() {
		return "BookCourse [id=" + id + ", course=" + course + ", student=" + student + ", startdate=" + startdate
				+ ", enddate=" + enddate + ", bookedcapacity=" + bookedcapacity + ", status=" + status
				+ ", bookingtime=" + bookingtime + "]";
	}
}
