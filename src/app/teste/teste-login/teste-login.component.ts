import { Usuario } from './../model/teste.usuario';
import { Component, OnInit } from '@angular/core';
import { TesteService } from 'src/app/teste/services/teste.service';

@Component({
  selector: 'app-teste-login',
  templateUrl: './teste-login.component.html',
  styleUrls: ['./teste-login.component.scss']
})
export class TesteLoginComponent implements OnInit{
  Usuario?: Usuario[];
  newUsuario: Usuario = {username: '', password: ''}

  constructor(private testeService: TesteService) {}

  ngOnInit(): void {
  }

  logarUsuario(usuario: Usuario): void{
    this.testeService.login({
      username: usuario.username,
      password: usuario.password
    })
  }

  deslogarUsuario():void{
  }


}
