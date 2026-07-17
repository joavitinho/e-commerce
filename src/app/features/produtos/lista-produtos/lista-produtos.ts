import { Component,signal } from '@angular/core';
import { Produto } from '../../../features/produtos/produto/produto';
import {computed} from '@angular/core';
import { PrecoFormatadoPipe} from '../../../shared/pipes/preco-formatado-pipe';
import {effect}from '@angular/core';
@Component({
selector: 'app-lista-produtos',
 imports: [Produto,PrecoFormatadoPipe],
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
//console.log('Produto selecionado:', nome);
this.produtoSelecionado.set(nome);
}
adicionarProduto() {
 this.Produtos.update((listaAtual) => [
  ...listaAtual,{nome:'Sony Playstation 5',preco:10000}
 ]);
}
totalProdutos =computed(()=> this.Produtos().length);

    valorTotal= computed(()=>{
  return this.Produtos().reduce
  ((total,item)=>total + item.preco,0);
});
substituirProduto(){
    this.Produtos.set([
      {nome:'Arroz Fazenda',preco:12.99 },
      {nome: 'Feijao Timbira',preco:15.99},
    ]);
  }
  constructor(){
      effect(() =>{
        console.log('Lista de Produtos Alterados:', this.Produtos ());
  });
    effect(()=>{
      console.log('Valor total Atualizado',this.valorTotal ());

      });

      effect(()=> {
        if (typeof document !== 'undefined'){
          document.title = `(${this.totalProdutos()})Minha Loja`
        }
      });
}
produtoSelecionado = signal <string | null>(null);
}