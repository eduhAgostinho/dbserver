import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListarComponent } from './todo-listar/todo-listar.component';
import { TodoFiltrarComponent } from './todo-filtrar/todo-filtrar.component';
import { TodoCadastrarComponent } from './todo-cadastrar/todo-cadastrar.component';
import { TodoEditarComponent } from './todo-editar/todo-editar.component';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListarComponent,
    TodoFiltrarComponent,
    TodoCadastrarComponent,
    TodoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
