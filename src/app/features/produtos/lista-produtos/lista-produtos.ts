import { Component,signal } from '@angular/core';
import { Produto } from '../../../features/produtos/produto/produto';
@Component({
  selector: 'app-lista-produtos',
 imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
Produtos = signal ([
  {nome: 'teclado',preco:49.00},
  {nome: 'mause gamer',preco:299.99},
  {nome: 'monitor',preco:1599.99},
  {nome:'desktop',preco:49.00},
  {nome: 'headset gamer',preco:699.99},
]);
exibirProduto(nome: string) {
  console.log('Produto selecionado:', nome);
}
adicionarProduto() {
 this.Produtos.update((listaAtual) => [
  ...listaAtual,{nome:'Sony Playstation 5',preco:10000}
 ]);
}
}
