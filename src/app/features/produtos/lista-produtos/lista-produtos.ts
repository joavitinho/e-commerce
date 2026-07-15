import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
 imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
Produtos=[
  {nome: 'teclado',preco:49.00},
  {nome: 'mause gamer',preco:299.99},
  {nome: 'monitor',preco:1599.99},
  {nome:'desktop',preco:49.00},
  {nome: 'headset gamer',preco:699.99},
];
exibirProduto(nome: string) {
  console.log('Produto selecionado:', nome);
}
}
