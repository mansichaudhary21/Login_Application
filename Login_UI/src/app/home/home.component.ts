import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../customerservice';
import { AuthenticationService } from '../authservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customer:Customer=null;
  customerService:CustomerService;
  errMsg=null;

  authenticationService;
  constructor(authenticationService:AuthenticationService,customerService:CustomerService) {
    this.customerService=customerService;
    this.authenticationService=authenticationService; 
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
