import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/model/todo';

@Component({
  selector: 'app-todo-cadastrar',
  templateUrl: './todo-cadastrar.component.html',
  styleUrls: ['./todo-cadastrar.component.css']
})
export class TodoCadastrarComponent implements OnInit {

  tarefa: Todo = {id: 0, userId: 0, title: 'título', completed: false};
  constructor() { }

  ngOnInit() {

  }


  onSubmit() {

  }
}
