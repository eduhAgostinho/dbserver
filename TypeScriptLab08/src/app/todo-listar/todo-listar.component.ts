import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarefa } from 'src/model/tarefa';
import { Todo } from 'src/model/todo';
import { TodoService } from 'src/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-listar',
  templateUrl: './todo-listar.component.html',
  styleUrls: ['./todo-listar.component.css']
})
export class TodoListarComponent implements OnInit, OnDestroy {

  tarefas: Tarefa[] = [];
  colunas: string[] = [];
  sub: Subscription;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.colunas = ['title', 'name', 'completed'];

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
