import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteLoginComponent } from './teste/teste-login/teste-login.component';
import { TesteCadastroComponent } from './teste/teste-cadastro/teste-cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: TesteLoginComponent},
  {path: 'cadastro', component: TesteCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
