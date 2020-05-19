package org.cap.customermgmt.service;

import org.cap.customermgmt.dao.CustomerDAO;
import org.cap.customermgmt.entities.Customer;
import org.cap.customermgmt.exception.CustomerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
    private CustomerDAO customerDao;

    public CustomerDAO getCustomerDao() {
        return customerDao;
    }

    @Autowired
    public void setCustomerDao(CustomerDAO dao) {
        this.customerDao = dao;
    }

    @Override
    public Customer findById(int id) {
        Optional<Customer> optional = customerDao.findById(id);
         if(optional.isPresent()){
             return optional.get();
         }
         throw new CustomerNotFoundException("customer not found for id="+id);
    }

    @Override
    public List<Customer> fetchAll() {
        List<Customer>customers=customerDao.findAll();
        return customers;
    }

    @Override
    public Customer save(Customer customer) {
        customer=customerDao.save(customer);
        return customer;
    }

    @Override
    public boolean credentialsCorrect(int id, String password){
        if(password==null|| password.isEmpty()){
            return false;
        }
        Customer customer=findById(id);
        if(customer==null){
            return false;
        }
        boolean passwordEquals=customer.getPassword().equals(password);
        return passwordEquals;
    }


    @Override
    public void remove(int id) {
        customerDao.deleteById(id);
    }
}