import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/model/tarefa';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];
  colunas: string[] = [];
  // constructor(private service: TarefasService) { }
  constructor() { }
  
  ngOnInit() {
    // this.tarefas = this.service.getTarefas2();
    this.tarefas = [
      { title: 'Titulo', name: 'Eduardo', completed: true},
      { title: 'Titulo2', name: 'Edu', completed: false },
      { title: 'Titulo3', name: 'Eduardo Figueiredo', completed: false }
    ];
    this.colunas = ['Titulo', 'Nome', 'Completado'];
  }

}
