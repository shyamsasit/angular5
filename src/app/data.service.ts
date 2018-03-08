import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
  
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','api_key':'12345'})
};
 const siteurl='https://arcane-plains-61025.herokuapp.com';
 const localurl='https://arcane-plains-61025.herokuapp.com';
@Injectable()
export class DataService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
 
 
     login(loginData) : Observable<any> {
    const body=JSON.stringify(loginData);
    const req = this.http.post(siteurl+'/api/users/auth/login',body,httpOptions);
    return req;
  }
     contact(contactData) : Observable<any> {
    const body=JSON.stringify(contactData);
    const req = this.http.post(siteurl+'/api/contacts',body,httpOptions);
    return req;
  }
     getPosts() : Observable<any> {
    
    const req = this.http.get(siteurl+'/api/posts',httpOptions);
    return req;
  }
     register(registerData) : Observable<any> {
    const body={ 
  "user_name": registerData['ruser_name'],
  "email": registerData['remail'],
  "password": registerData['rpassword']
};
    const req = this.http.post(siteurl+'/api/users/auth/register',body,httpOptions);
    return req;
  }
}