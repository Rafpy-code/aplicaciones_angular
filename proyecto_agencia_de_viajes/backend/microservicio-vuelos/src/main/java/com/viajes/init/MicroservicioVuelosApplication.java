package com.viajes.init;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class MicroservicioVuelosApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroservicioVuelosApplication.class, args);
	}

}
