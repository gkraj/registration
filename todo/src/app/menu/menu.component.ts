import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserAuth: boolean = false;
  constructor(private hardcodedAuth: HardcodedAuthService) { }

  ngOnInit(): void {
    this.isUserAuth = this.hardcodedAuth.isUserLoggedIn()
    console.log(this.isUserAuth);
    // if (this.hardcodedAuth.isUserLoggedIn())
    //   this.isUserAuth = true
    // this.isUserAuth = false
  }

}
