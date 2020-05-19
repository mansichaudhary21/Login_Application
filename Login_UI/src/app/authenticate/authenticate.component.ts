import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from '../authservice';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})

export class AuthenticateComponent implements OnInit {

  service:AuthenticationService;
  router:Router;
  constructor(service:AuthenticationService,router: Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit(): void {
  }

  loginForm = new FormGroup(
    {
      id : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
      //panNumber : new FormControl('',[Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')])
    });
  
    errMsg=null;

  loginSubmit(form:any){
// let data  = form.values;
let data=form.value;
let id=data.id;
let password=data.password;
 let observable:Observable<string>=this.service.loginRequest(id,password);
 observable.subscribe(
   token=>{
     console.log("fetched token stored in storage="+token);
     localStorage.setItem("token",token);
     localStorage.setItem("id",id);
     this.router.navigate(['app-home']);
   },
   err=>{
   //  console.log("err while fetching token="+err.message);
    this.errMsg = err.error;
    
    
     let text=JSON.stringify(err);
     console.log("err is "+text);
   }
 );
}

get id():any{
  return this.loginForm.get("id");
}

get password():any{
  return this.loginForm.get("password");
}


}
