import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Tarefa } from 'src/model/tarefa';
import { TodoService } from 'src/services/todo.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-todo-listar',
  templateUrl: './todo-listar.component.html',
  styleUrls: ['./todo-listar.component.css']
})
export class TodoListarComponent implements OnInit, OnDestroy {

  tarefas: Tarefa[] = [];
  colunas: string[] = [];
  sub: Subscription; 
  // dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
  dataSource;
  constructor(private todoService: TodoService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.colunas = ['title', 'name', 'completed'];
    this.sub = this.todoService.buscarTodos().subscribe((result) => {
      this.tarefas = result; this.dataSource = new MatTableDataSource<Tarefa>(this.tarefas); this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
