import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/model/todo';
import { Tarefa } from 'src/model/tarefa';
import { Subscription, } from 'rxjs';
import { map, concatAll, mergeMap } from 'rxjs/operators';
import { User } from 'src/model/user';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com/todos';
  private urlBase2 = 'https://jsonplaceholder.typicode.com/users';
  private sub: Subscription;

  constructor(private http: HttpClient, private userServ: UserService) { }

  buscarTodos() {
    return this.http.get<Todo>(this.urlBase)
    .pipe(
      map( x => {
        const a = this.getTarefas(x);

      })
    );
  }
  getTarefas(todo: Todo): Observable<User> {
    return this.userServ.buscarPorId(todo.userId);
  }

  /*
  observ.pipe(
    map(
      x => fazAlgo(x) ----> retorna observable
      concatALl()
    )
  )
  */


  buscarPorId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.urlBase2}/${userId}`);
  }
}
