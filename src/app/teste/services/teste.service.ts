import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/teste.produto';
import { Usuario } from '../model/teste.usuario';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  login(data: Usuario): Observable<any> {
    return this.http.post(`${baseUrl}/login`, data);
  }

  createUsuario(data: Usuario): Observable<any> {
    return this.http.post(`${baseUrl}/criar-usuario`, data);
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${baseUrl}/cadastro`);
  }

  createProduto(data: Produto): Observable<any> {
    return this.http.post(`${baseUrl}/cadastro`, data);
  }

  updateProduto(data: Produto): Observable<any> {
    return this.http.put(`${baseUrl}/cadastro`, data);
  }

  deleteProduto(id: String): Observable<any> {
    return this.http.delete(`${baseUrl}/cadastro/${id}`);
  }

}