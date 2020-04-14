import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  name = ''
  WelcomeMessage : String
  WelcomeError : String
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getButtonValue(){
    this.service.welcomeServicePathVariable(this.name).subscribe(
      response => this.GetSuccessResponse(response),
      error => this.GetErrorResponse(error)
    );
  }
  GetSuccessResponse(response){
    this.WelcomeMessage = response.message;
  }
  GetErrorResponse(error){
    this.WelcomeError = error.error.message;
  }

}
