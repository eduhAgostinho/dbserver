import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/model/todo';
import { Tarefa } from 'src/model/tarefa';
import { User } from 'src/model/user';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com/todos';
  private urlBase2 = 'https://jsonplaceholder.typicode.com/users';
  private sub: Subscription;

  constructor(private http: HttpClient, private userServ: UserService) { }

  buscarTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlBase);
  }

  getTarefas(todo: Todo[]): Tarefa[] {
    let tarefa: Tarefa[] = [];
    todo.forEach( (t) => {
      this.sub = this.userServ.buscarPorId(t.userId).subscribe((user) => {tarefa.push({ title: t.title, completed: t.completed, name: user.name })});
    });
    this.sub.unsubscribe();
    return tarefa;
  }

  buscarPorId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.urlBase2}/${userId}`);
  }
}
