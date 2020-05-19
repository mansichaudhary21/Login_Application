package com.cg.gateway.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.gateway.entities.*;

public interface CredentialDAO extends JpaRepository<UserCredential,String>{

}
