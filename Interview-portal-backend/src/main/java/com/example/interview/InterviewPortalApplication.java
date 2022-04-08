package com.example.interview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@SpringBootApplication
public class InterviewPortalApplication {


	public static void main(String[] args) {
		SpringApplication.run(InterviewPortalApplication.class, args);
	}

}
