import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/model/todo';
import { catchError } from 'rxjs/operators';
import { User } from 'src/model/user';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
    .pipe(catchError(this.tratadorError([])));
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
    .pipe(catchError(this.tratadorError(null)));
  }

  private tratadorError<T>(resultado: T) {
    return (erro: HttpErrorResponse): Observable<T> => {
      if (erro.error instanceof ErrorEvent) {
        console.log(`Erro: ${erro.error.message}`);
      } else {
        console.log(`Status: ${erro.status}`);
        return of(resultado as T);
      }
    }
  }
}
