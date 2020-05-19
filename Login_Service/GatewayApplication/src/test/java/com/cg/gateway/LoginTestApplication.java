package com.cg.gateway;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.cg.gateway.exceptions.UserNotFoundException;
import com.cg.gateway.service.CredentialService;

@ExtendWith(SpringExtension.class)// integrate spring test framework with junit5
@SpringBootTest
public class LoginTestApplication {

	@Autowired
	private CredentialService credentialService;
	
	
	//When wrong Id is provided
	@Test
	void tests_UserById()
	{
		Executable executable = () -> credentialService.findById("111");
		Assertions.assertThrows(UserNotFoundException.class, executable);
		
	}
}
