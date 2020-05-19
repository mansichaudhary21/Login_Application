package org.cap.customermgmt.service;

import java.util.List;

import org.cap.customermgmt.entities.Customer;

public interface ICustomerService {
	
	Customer findById(int id);

    List<Customer> fetchAll();

    Customer save(Customer customer);

    boolean credentialsCorrect(int id, String password);

    void remove(int id);

}
