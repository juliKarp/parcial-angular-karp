import { Component, OnInit } from '@angular/core';
import { Usuario } from './domain/usuario';
import { Producto } from './domain/producto';
import { ShoppingCartService } from './services/shopping-cart.service';
import { MiCompraComponent } from './components/mi-compra/mi-compra.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-cart-angular';
  
  usuarioLogueado: Usuario = new Usuario("")
  productos: Array<Producto> = []

  promesaUsuarioLogueado: Promise<Usuario>
  promesaProductos: Promise<Array<Producto>>

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.promesaUsuarioLogueado = this.shoppingCartService.getUsuarioLogueado()
    this.promesaProductos = this.shoppingCartService.getProductos()
    this.usuarioLogueado = await this.promesaUsuarioLogueado
    this.productos = await this.promesaProductos
  }

  async componenteActivado(componente: ShoppingCartComponent | MiCompraComponent) {
    componente.usuarioLogueado = await this.promesaUsuarioLogueado
    componente.productos = await this.promesaProductos
  }
}
