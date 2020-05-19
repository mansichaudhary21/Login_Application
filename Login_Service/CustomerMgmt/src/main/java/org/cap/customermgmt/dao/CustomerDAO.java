package org.cap.customermgmt.dao;

import org.cap.customermgmt.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerDAO extends JpaRepository<Customer,Integer>{

}
