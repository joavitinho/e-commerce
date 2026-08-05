import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //remova importaçao do RouterOutlet,pois nao esta sendo usado no momento
import { login, usuarioLogado, logout } from './core/auth';
import { Header } from "./shared/layout/header/header";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
//!import {listaProdutos} from './features/produtos/lista-produtos/lista-produtos'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, MatIconModule, MatToolbarModule,MatButtonModule],
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