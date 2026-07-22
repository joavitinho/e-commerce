import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remova importaçao do RouterOutlet,pois nao esta sendo usado no momento
import { login, usuarioLogado, logout } from './core/auth';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
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