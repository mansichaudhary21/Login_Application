import { Component, OnInit } from '@angular/core';
//import { User } from 'src/app/model/userDto';
//import { LoginServiceService } from 'src/app/service/login-service.service';
import { AuthenticationService } from 'src/app/authservice';
import { Customer } from '../model/customer';
import { CustomerService } from '../customerservice';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  customer:Customer=null;
  errMsg=null;
  authenticationService : AuthenticationService;
  customerService:CustomerService;
  constructor(customerService:CustomerService,authenticationService:AuthenticationService) {
    this.authenticationService=authenticationService;
    this.customerService=customerService; 
  }
  ngOnInit(): void {
    let observable=this.customerService.fetchMe();
    observable.subscribe(customer=>{
   this.customer=customer;
    },
    
     err=>{
        this.errMsg=err.error;
       });
    }

  }

