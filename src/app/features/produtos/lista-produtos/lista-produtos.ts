import { Component,signal } from '@angular/core';
import { Produto } from '../../../features/produtos/produto/produto';
import {computed} from '@angular/core';
import { PrecoFormatadoPipe} from '../../../shared/pipes/preco-formatado-pipe';
import {effect}from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
selector: 'app-lista-produtos',
 imports: [Produto,PrecoFormatadoPipe,UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {
Produtos = signal ([
  {nome: 'teclado gamer',preco:149.00},
  {nome: 'mause gamer',preco:299.99},
  {nome: 'monitor gamer',preco:1599.99},
  {nome:'desktop gamer',preco:4999.99},
  {nome: 'headset gamer',preco:699.99},
]);
exibirProduto(nome: string) {
//console.log('Produto selecionado:', nome);
this.produtoSelecionado.set(nome);
}
adicionarProduto() {
 this.Produtos.update((listaAtual) => [
  ...listaAtual,{nome:'Precossado core i5 14550FS',preco:2500}
 ]);
}
totalProdutos =computed(()=> this.Produtos().length);

    valorTotal= computed(()=>{
  return this.Produtos().reduce
  ((total,item)=>total + item.preco,0);
});
substituirProduto(){
    this.Produtos.set([
      {nome:'Teclado',preco:40 },
      {nome: 'Mause',preco:10},
      {nome: 'Monitor',preco:100},
      {nome: 'Desktop',preco:500},
      {nome: 'Headset',preco:25},
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
          document.title = `(${this.totalProdutos()})Minha Loja`;
        }
      });
}
produtoSelecionado = signal <string | null>(null);
carrinho = signal <{nome: string; preco: number} []>([]);

adicionarAoCarrinho(produto: {nome:string; preco:number}){
this.carrinho.update(listaAtual =>[
  ...listaAtual,produto]);}

  quantidadeCarrinho = computed(()=>this.carrinho().length);
  
  totalCarrinho = computed(()=> {
    return this.carrinho().reduce((total,item) =>
      total+item.preco,0);
  });

}