import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: TarefasComponent},
  { path: 'tarefas', redirectTo: '' },
  { path: 'cadastrar', component: CadastroComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
