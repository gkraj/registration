import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class SuccessResponse {
  constructor(
    public Mess : String
  ){

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  welcomeServiceBean(){
    return this.http.get<SuccessResponse>('http://localhost:8080/hello-bean');
    //console.log("entered into welcome service bean");
  }
  welcomeServicePathVariable(name){
    return this.http.get<SuccessResponse>(`http://localhost:8080/hello/${name}`);
  }
}
