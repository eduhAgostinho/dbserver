import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TarefasService } from './tarefas/tarefas.service';


@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
