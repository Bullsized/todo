import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getAllTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}`);
  }

  getTodoById(todoId: string) {
    return this.http.get<Todo>(`${this.baseUrl}/${todoId}`);
  }

  postTodo(requestBody: Todo) {
    return this.http.post<Todo>(`${this.baseUrl}`, requestBody);
  }

  editTodo(todoId: string, requestBody: Todo) {
    return this.http.put<Todo>(`${this.baseUrl}/${todoId}`, requestBody);
  }

  deleteTodo(todoId: string) {
    return this.http.delete<null>(`${this.baseUrl}/${todoId}`);
  }

  private get baseUrl() {
    return `${environment.apiDomain}`;
  }
}
