import { Component, OnInit } from '@angular/core';
import {Usuario} from './vo/usuario'
import {Injectable} from '@angular/core'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  usuario : Usuario = new Usuario

  public ngOnInit(){

    if(this.usuario==null){
      this.usuario.img="./assets/aplicaçao/negao.jpg"
    }else{
      this.usuario.img="./assets/aplicaçao/logo.png"
    }
  }

 
  
}
