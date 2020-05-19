import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable()
export class AuthenticationService{

     client:HttpClient;

   baseServiceUrl="http://localhost:8587";
   constructor(client:HttpClient){
  this.client=client;
    }

registerRequest(customer:Customer):Observable<any>
{
  let url=this.baseServiceUrl+"/register"
  let observable =  this.client.post(url,customer,{responseType:'text'});
  return observable;
}    

loginRequest(id,password):Observable<string>{
 let url=this.baseServiceUrl+"/createtoken";   
 let cred={id,password}; 
 let observable =this.client.post(url,cred,{responseType:'text'});
 return observable;
}

isAuthenticated(){
  let token=localStorage.getItem("token");
  if(token==null || token==undefined ){
   return false;
  }
  return true;
}

getLoginId(){
  let id= localStorage.getItem("id");
  return id;
}

logout(){
localStorage.clear();
}

}