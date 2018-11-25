import { Component, OnInit } from '@angular/core';
import {Produto} from '../vo/produto'
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class Produtoscomponent implements OnInit{
  
  public lista_produto:Produto[]=[];
  public produto:Produto = new Produto();
  public i : number;
  
  constructor(private prodSvc : ProdutoService) {
    
  }

  public ngOnInit(){
  //    this.listar()

    this.prodSvc.listar().subscribe(ret => {
      this.lista_produto = ret;
    })
  }
  
  public listar(){
    for(this.i=0;this.i<10;this.i++){
      
      this.produto.img='./assets/img/produto1.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();
      
      this.produto.img='./assets/img/produto2.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto3.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto4.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto5.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto6.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto7.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();

      this.produto.img='./assets/img/produto8.jpg'
      this.produto.nome="margarina"
      this.produto.valor=22.22
      this.produto.descricao = "margarina 500g"
      this.lista_produto.push(this.produto);
      this.produto= new Produto();
    }
  }
  
}
