import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username,password){
    if(username==="user" && password==="dummy"){
      sessionStorage.setItem('authenticatedUser',username)
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    //console.log('user sesion : ' +user +'\n'+ !(user===null) );
    return !(user===null)
  }
  isUserLoggedOut(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
