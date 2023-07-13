import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { TesteLoginComponent } from './teste-login/teste-login.component';
import { TesteCadastroComponent } from './teste-cadastro/teste-cadastro.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TesteComponent,
    TesteLoginComponent,
    TesteCadastroComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [TesteComponent]
})
export class TesteModule { }
