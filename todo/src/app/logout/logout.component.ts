import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  name = 'gokul'
  constructor(private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
    this.hardcodedAuthService.isUserLoggedOut()
  }
}
