package com.foodies.backend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableMongoAuditing
@SpringBootApplication
//@EnableSwagger2
@Configuration
public class BackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}


}
