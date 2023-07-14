import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/teste.produto';
import { Usuario } from '../model/teste.usuario';
import { loginResponse } from './dto/login.response';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  login(data: Usuario): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${baseUrl}/login`, data);
  }

  createUsuario(data: Usuario): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${baseUrl}/criar-usuario`, data);
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${baseUrl}/cadastro`);
  }

  createProduto(data: Produto): Observable<any> {
    return this.http.post(`${baseUrl}/cadastro`, data);
  }

  updateProduto(data: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${baseUrl}/cadastro`, data);
  }

  deleteProduto(id: String): Observable<any> {
    return this.http.delete(`${baseUrl}/cadastro/${id}`);
  }

}