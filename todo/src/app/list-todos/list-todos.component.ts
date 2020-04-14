import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(

    // public id : number,
    public uhid : String,
    public timeofadmission : Date,
    public name : String,
    public age : number,
    public gender : String,
    public phonenumber : number,
    public place : String,
    public state : String,
    public symptoms : String,
    public contactexposure : String, 
    public comorbities : String,
    public sampereportingdate : Date,
    public samplestatus : String, 
    public dischargedate : String,
    public additionalinfo : String,
    public doctorname : String,
    public doctornumber : number
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos : Todo[];
  isDeleted : boolean = false;
  message : String;
  nameval : String;

  // todos = [
  //   new Todo(1,'learning angular',false, new Date()),
  //   new Todo(2,'learning springboot',false,new Date()),
  //   new Todo(3,'have to learn guitar',false, new Date())
  // ] 

  // todos = [
  //   { id:1,description: 'Learning angular' },
  //   { id:2, description: 'Learning springboot' },
  //   { id:3, description: 'learning deep learning' },
  //   { id:4, description: 'learning guitar' }
  // ]

  constructor(
    private todoService:TodoDataService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.getTodoList().subscribe(
      response => {
        this.todos = response;
        console.log("response");
      }
    )
  }

  editTodo(uhid){
    console.log(`update ${uhid}`);
    this.route.navigate(['patients',uhid]);

  }

  viewTodo(uhid){
    console.log(`view ${uhid}`);
    this.route.navigate(['patients',uhid]);

  }

  deleteTodo(uhid){
    this.todoService.deleteTodoList(uhid).subscribe(
      response => {
        console.log(response);
        this.message = `This id ${uhid} is deleted successfully!`;
        this.refreshTodo();
      }
    )
  }

  addTodo(){
    this.route.navigate(['/patients/-1']);
  }
  

}
