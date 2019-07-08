import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Todo } from 'src/model/todo';
import { Tarefa } from 'src/model/tarefa';
import { Subscription, of} from 'rxjs';
import { map, concatAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com/todos';
  private sub: Subscription;
  constructor(private http: HttpClient, private userServ: UserService) { }

  buscarTodos(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.urlBase)
    .pipe(
      map( todo => { todo.map( t => {
        this.sub = this.getTarefas(t).subscribe( user => t.name = user.username )
      }); return todo })
    );
  }

  getTarefas(todo: Todo) {
    return this.userServ.buscarPorId(todo.userId);
  }

}
