import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/model/todo';
import { Tarefa } from 'src/model/tarefa';
import { Subscription, of} from 'rxjs';
import { map, concatAll, concatMap } from 'rxjs/operators';
import { User } from 'src/model/user';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com/todos';
  private sub: Subscription;
  constructor(private http: HttpClient, private userServ: UserService) { }

  buscarTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlBase)
    .pipe(
      map( todos => {
        todos.map( this.getTarefas(todos)concatAll() )
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


}
