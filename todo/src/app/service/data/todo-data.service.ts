import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  getTodoList(){
    return this.http.get<Todo[]>(`http://13.234.168.104:8080/registration-V1.0/patients`);
  }
  deleteTodoList(id){
    return this.http.delete(`http://13.234.168.104:8080/registration-V1.0/patients/${id}`);
  }
  getTodoListById(id){
    return this.http.get<Todo>(`http://13.234.168.104:8080/registration-V1.0/patients/${id}`);
  }
  updateListById(id,todo){
    return this.http.put(`http://13.234.168.104:8080/registration-V1.0/patients/${id}`,todo);
  }
  saveList(todo){
    return this.http.post(`http://13.234.168.104:8080/registration-V1.0/patients`,todo);
  }


}
