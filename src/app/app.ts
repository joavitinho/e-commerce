import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //remova importaçao do RouterOutlet,pois nao esta sendo usado no momento
import { Produto } from './components/produto/produto';
@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
