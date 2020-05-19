import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice';
import { Customer } from '../model/customer';
import { AuthenticationService } from '../authservice';

@Component({
  selector: 'list-customers',
  templateUrl: './list-cutomers.component.html',
  styleUrls: ['./list-cutomers.component.css']
})
export class ListCutomersComponent implements OnInit {
   customerService:CustomerService;
   customers=[];
   errMsg=null;
   authenticationService:AuthenticationService;
   constructor(authService:AuthenticationService,customerService:CustomerService) { 
    this.customerService=customerService;
    this.authenticationService=this.authenticationService;
  }

  ngOnInit(): void {
   let observable=this.customerService.fetchAllCustomers();
    observable.subscribe(
      customers=>this.customers=customers,
      err=>{
        this.errMsg=err.error;
      let fullerr=JSON.stringify(err);
      console.log("full err="+fullerr);  
    });
  }


}
