import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remova importaçao do RouterOutlet,pois nao esta sendo usado no momento
import { login, usuarioLogado, logout } from './core/auth';
import { Header } from "./shared/layout/header/header";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor } from "@angular/material/button";
import { UpperCasePipe } from '@angular/common';
//!import {listaProdutos} from './features/produtos/lista-produtos/lista-produtos'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, MatIcon, MatAnchor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
nomeLoja = 'JV Studio'; //nome do e-commerce
usuarioLogado = usuarioLogado; //variavel que recebe o sinal de usuario logado
login = login; 
logout = logout; 
}