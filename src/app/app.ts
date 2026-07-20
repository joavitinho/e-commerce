import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remova importaçao do RouterOutlet,pois nao esta sendo usado no momento
//import { Produto } from '../app/features/produtos/produto/produto';
//import { ListaProdutos} from './features/produtos/lista-produtos/lista-produtos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
nomeLoja = 'JV Studio'; //nome do e-commerce

}