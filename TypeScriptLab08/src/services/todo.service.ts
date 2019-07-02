import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient, private userServ: UserService) { }

  buscarTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlBase);
  }

  buscarPorId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.urlBase}/${userId}`);
  }
}
