import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/teste.produto';
import { TesteService } from '../services/teste.service';
import { NgForm } from '@angular/forms';

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
      for(let produto of this.produtos){
        produto.isEditable = false;
      }
    });
  }

  addProduto(form: NgForm): void {
    let produto: Produto = form.value;
    this.testeService.createProduto(produto)
    .subscribe(
      (res:Produto) => {
        console.log(res)
    });
  }

  updateProduto(produto: Produto): void {
    this.testeService.updateProduto({
      id: produto.id,
      nomeProduto: produto.nomeProduto,
      fornecedor: produto.fornecedor,
      valorProduto: produto.valorProduto
    }).subscribe(
      res => {
        console.log(res)
      });
  }

  deleteProduto(produtoId?: String): void {
    if(produtoId != null){
      this.testeService.deleteProduto(produtoId).subscribe();
    }
  }


  deslogarUsuario():void{
    localStorage.setItem('autenticado', 'false');
    console.log("deslogado com sucesso")
  }
    
}
