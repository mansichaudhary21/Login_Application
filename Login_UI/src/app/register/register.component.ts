import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authservice';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  service:AuthenticationService;
  router:Router;
 
  constructor(service:AuthenticationService, router:Router) {
    this.service = service;
    this.router= router;
   }

  customer:Customer=null; 

  ngOnInit(): void {
  }

  unamePattern = "^[a-zA-Z0-9_-]{8,15}$";
  pwdPattern = "^[a-zA-Z0-9]{6,12}$";
 
  registerForm = new FormGroup(
    {
      name : new FormControl('',[Validators.required,Validators.pattern(this.unamePattern)]),
      password : new FormControl('',[Validators.required,Validators.pattern(this.pwdPattern)]),
      role : new FormControl('',[Validators.required])
    });
  
  registerUser(form:any){
    let details = form.value;
    let name=details.name;
    let password=details.password;
    let role = details.role;
    this.customer=new Customer(name,password,role);
    this.customer.name=name;
    this.customer.password=password;
    this.customer.role=role;
    let observable:Observable<string>=this.service.registerRequest(this.customer);
    observable.subscribe(
      data=>{
        console.log(localStorage.getItem('token'));
        console.log("registered userdata ="+ data);
        //localStorage.setItem("token",token);
        //localStorage.setItem("id",id);
        this.router.navigate(['app-userlogin']);
      },
      err=>{
      //  console.log("err while fetching token="+err.message);
        let text=JSON.stringify(err);
        console.log("err is "+text);
      }
    );
  }

  get name():any{
    return this.registerForm.get("name");
  }
  
  get password():any{
    return this.registerForm.get("password");
  }

  get role():any{
    return this.registerForm.get("role");
  }
  
}
