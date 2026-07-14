import { Component } from '@angular/core';
import {UpperCasePipe, CurrencyPipe}from '@angular/common';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
 // produto='notebook';
 // preco= 2500;
 // mostrarPreco= true;
 // mostrarproduto= false;
produtos=[
  {produto:'monitor',preco: 1000},
  {produto:'teclado',preco:50.00},
  {produto:'mause',preco: 26.00},
  {produto:'desktop',proco: 1500},
];
}
