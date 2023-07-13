import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/teste.produto';
import { TesteService } from '../services/teste.service';

@Component({
  selector: 'app-teste-cadastro',
  templateUrl: './teste-cadastro.component.html',
  styleUrls: ['./teste-cadastro.component.scss']
})
export class TesteCadastroComponent implements OnInit{  
  produtos: Produto[] =[];
  newProduto: Produto = {nomeProduto: '', fornecedor: '', valorProduto: 0}

  constructor(private testeService: TesteService) {}

  ngOnInit(): void {
    this.testeService.getAllProdutos().subscribe(res => {
      this.produtos = res;
    });
    this.produtos.push({id: 1, idMongo: '1',nomeProduto: 'abc', fornecedor: 'abc', valorProduto: 0})
  }
  

  addProduto(novoProduto: Produto): void {
    this.testeService.createProduto({
      nomeProduto: novoProduto.nomeProduto,
      fornecedor: novoProduto.fornecedor,
      valorProduto: novoProduto.valorProduto
    }).subscribe(
      res => {
        this.produtos = res;
    });
  }

  updateProduto(produto: Produto): void {
    this.testeService.updateProduto({
      id: produto.id,
      idMongo: produto.idMongo,
      nomeProduto: produto.nomeProduto,
      fornecedor: produto.fornecedor,
      valorProduto: produto.valorProduto
    }).subscribe(
      res => {
        this.produtos = res;
      });
  }

  deleteProduto(produtoId: String): void {
    this.testeService.deleteProduto(produtoId).subscribe();
  }
}
