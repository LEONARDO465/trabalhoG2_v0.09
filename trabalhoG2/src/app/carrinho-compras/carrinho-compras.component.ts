import { Component, OnInit } from '@angular/core';
import { Produto } from '../vo/produto';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  public lista_produto:Produto[]=[];
  public produto:Produto = new Produto();
  public i : number;
  constructor() { }

  ngOnInit() {
    for(this.i=0;this.i<2;this.i++){
      
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

      
    }
  }

}
