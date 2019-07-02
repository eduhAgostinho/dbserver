import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/model/tarefa';

@Component({
  selector: 'app-todo-listar',
  templateUrl: './todo-listar.component.html',
  styleUrls: ['./todo-listar.component.css']
})
export class TodoListarComponent implements OnInit {

  tarefas: Tarefa[] = [];
  colunas: string[] = [];
  constructor() { }

  ngOnInit() {
    this.colunas = ['title', 'name', 'completed'];
    this.tarefas = [
      { title: 'Titulo', name: 'Eduardo', completed: true},
      { title: 'Titulo2', name: 'Edu', completed: false },
      { title: 'Titulo3', name: 'Eduardo Figueiredo', completed: false }
    ];
  }

}
