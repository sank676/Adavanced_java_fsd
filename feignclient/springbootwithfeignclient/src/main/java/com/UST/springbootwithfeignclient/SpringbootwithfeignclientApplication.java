package com.UST.springbootwithfeignclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class SpringbootwithfeignclientApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootwithfeignclientApplication.class, args);
	}

}
