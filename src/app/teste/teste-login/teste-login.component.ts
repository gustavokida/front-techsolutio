import { loginResponse } from './../services/dto/login.response';
import { Usuario } from './../model/teste.usuario';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TesteService } from 'src/app/teste/services/teste.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teste-login',
  templateUrl: './teste-login.component.html',
  styleUrls: ['./teste-login.component.scss']
})
export class TesteLoginComponent implements OnInit{
  usuario: Usuario[] = [];
  newUsuario: Usuario = {username: '', password: ''}
  response: loginResponse = {id: ''}

  subscription: Subscription;

  constructor(private testeService: TesteService, private router: Router) {
    this.subscription = new Subscription();
  }
  

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logarUsuario(form: NgForm): void{
    var usuario: Usuario = form.value
    this.subscription = this.testeService.login({
      username: usuario.username,
      password: usuario.password
    }).subscribe(
      (res: loginResponse) => {
      this.response.id = res.id;
      console.log(this.response);
      this.validaLogin(this.response);
      });
  }

  criarUsuario(form: NgForm): void{
    var usuario: Usuario = form.value
    this.subscription = this.testeService.createUsuario({
      username: usuario.username,
      password: usuario.password
    }).subscribe(
      (res:loginResponse) => {
        this.response.id = res.id;
        console.log(this.response)
        this.validaLogin(this.response);
      }
    )
  }

  validaLogin(response: loginResponse){
    if (response.id != '') {
      this.router.navigate(['/cadastro']);
      localStorage.setItem('autenticado', 'true');
    } else {
      console.log('Login failed');
    }
  }

}

