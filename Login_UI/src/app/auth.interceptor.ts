import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let url=request.url;
   console.log("inside intercept url="+url);
   
   let token=localStorage.getItem("token");
   let headers:HttpHeaders=new HttpHeaders({"token":token});
   if(!url.startsWith("http://localhost:8587/createtoken") &&
    !url.startsWith("http://localhost:8587/register")){
      request = request.clone({headers});   
  }
   return next.handle(request);
  }
}