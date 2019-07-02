import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCadastrarComponent } from './todo-cadastrar/todo-cadastrar.component';
import { TodoListarComponent } from './todo-listar/todo-listar.component';

const routes: Routes = [
  { path: '', component: TodoListarComponent},
  { path: 'tarefas', redirectTo: '' },
  { path: 'cadastrar', component: TodoCadastrarComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
