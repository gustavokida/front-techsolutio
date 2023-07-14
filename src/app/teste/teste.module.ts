import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TesteComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [TesteComponent]
})
export class TesteModule { }
