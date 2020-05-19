package org.cap.customermgmt.controller;

import org.cap.customermgmt.entities.Customer;
import org.cap.customermgmt.service.ICustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private static final Logger Log = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    private ICustomerService service;


    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> fetchAllCustomers() {
        List<Customer> customers = service.fetchAll();
        ResponseEntity<List<Customer>> response = new ResponseEntity<>(customers, HttpStatus.OK);
        return response;
    }


}
