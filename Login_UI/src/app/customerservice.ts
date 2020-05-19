import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService{
    client:HttpClient;

    baseServiceUrl="http://localhost:8587";
 
    constructor(client:HttpClient){
    this.client=client;
     }
 

    fetchMe():Observable<Customer>{
     let id=localStorage.getItem("id");   
     if(id==""||id==undefined|| id==null){
         return;
     }
     let url=this.baseServiceUrl+"/customers/get/"+id;  
     let observable:Observable<Customer>=this.client.get<Customer>(url);
     return observable;
    }


    fetchAllCustomers():Observable<Customer[]>{
        let url=this.baseServiceUrl+"/admin/customers";  
        let observable:Observable<Customer[]>=this.client.get<Customer[]>(url);
        return observable;
    }
}