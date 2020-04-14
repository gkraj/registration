import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  errorMessage = 'Invalid user login'
  invalidLogin = false
  constructor(
    private router:Router,
    private hardcodedauth:HardcodedAuthService
    ) { }

  ngOnInit(): void {
  }
  // loginButton(){
  //   if(this.hardcodedauth.authenticate(this.username,this.password)){
  //     this.router.navigate(['welcome',this.username])
  //     this.invalidLogin=false
  //   }else{
  //     this.invalidLogin=true
  //   }

  // }
  loginButton(){
    if(this.hardcodedauth.authenticate(this.username,this.password)){
      this.router.navigate(['patients'])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }

  }

}
