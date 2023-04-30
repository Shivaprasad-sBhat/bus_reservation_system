package com.masai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
servers = {
@Server(url = "/", description = "Default Server URL")
}
)
@SpringBootApplication

public class BusReservationApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(BusReservationApplication.class, args);
		

	}

}
