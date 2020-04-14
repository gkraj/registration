import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id = null;
  todo: Todo;

  constructor(
    private todoById: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,new Date(),'',0,'',0,'','','','','',new Date(),'','','','',0);
    if(this.id !=-1) this.getTodobyId();  
  }

  getTodobyId(){
    this.todoById.getTodoListById(this.id).subscribe(
      data => this.todo = data
    )
  }

  saveTodo(){
    if( this.id == -1){
      this.todoById.saveList(this.todo)
        .subscribe(
          data =>{
            console.log(data);
            this.router.navigate(['/patients']);
          }
        )
    }
    else{
      this.todoById.updateListById(this.id, this.todo)
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['/patients']);
            }
          )
    }
  }

}
