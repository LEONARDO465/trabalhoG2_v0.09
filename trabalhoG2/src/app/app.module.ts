import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Historicocomponent} from './historico/historico.component'
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import {Produtoscomponent} from './produtos/produtos.component'
import {RouterModule, Router, Routes} from "@angular/router"
import { ProdutoService } from './produto.service'
import {Usuarioscomponent} from './usuario/usuario.component'
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Aplicacaocomponent } from './aplicacao/aplicacao.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

 const rotas : Routes =[

  {path:'historico',
  component:Historicocomponent},
  {path:'aplicacao',
component:Aplicacaocomponent},
  {path:'produtos',
  component:Produtoscomponent},
  {path:'usuario',
  component:Usuarioscomponent},
  { path:'carrinho-compras',
    component:CarrinhoComprasComponent},
  {path:'',pathMatch:'full',
    redirectTo:'/root'}
];

@NgModule({
  declarations: [
    AppComponent,
    Produtoscomponent,
    Historicocomponent,
    Aplicacaocomponent, 
    Usuarioscomponent, 
    CarrinhoComprasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
