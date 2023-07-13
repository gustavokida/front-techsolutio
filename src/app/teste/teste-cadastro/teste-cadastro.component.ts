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
    });
  }

  handleProduto(form: NgForm): void{
    let produto: Produto = form.value;
    let tipoBotao: any = produto.tipoBotao
    delete produto.tipoBotao;
    if(tipoBotao == null){
    }
    else if(tipoBotao == '1'){
      this.addProduto(produto)
    }
    else if(tipoBotao == '2'){
      this.updateProduto(produto)
    }
    else{
      this.deleteProduto(produto.id)
    }
    
  }
  

  addProduto(produto: Produto): void {
    delete produto.id
    this.testeService.createProduto(produto)
    .subscribe(
      (res:Produto) => {
        this.newProduto = res;
        console.log(this.newProduto)
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
        this.produtos = res;
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
