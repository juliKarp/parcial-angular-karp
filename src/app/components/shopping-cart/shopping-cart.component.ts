import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Usuario } from 'src/app/domain/usuario';
import { ShoppingCart } from 'src/app/domain/shoppingCart';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ShoppingCartService]
})

export class ShoppingCartComponent implements OnInit {

  usuarioLogueado: Usuario
  productos: Array<Producto> = []

  constructor(private shoppingCartService: ShoppingCartService) {
    this.usuarioLogueado = shoppingCartService.getUsuarioLogueado()
    this.productos = shoppingCartService.getProductos()
  }

  ngOnInit() {
  }

  aniadirAlCarrito(producto: Producto) {
    this.usuarioLogueado.shoppingCart.agregarProducto(producto)
  }

  quitarDelCarrito(producto: Producto) {
    this.usuarioLogueado.shoppingCart.quitarProducto(producto)
  }

  noHayEnCarrito(producto: Producto) : boolean {
    return !this.usuarioLogueado.shoppingCart.tieneProducto(producto)
  }

  noPuedeFinalizarCompra() : boolean {
    return this.usuarioLogueado.saldoInsuficiente() || this.usuarioLogueado.shoppingCart.estaVacio()
  }

  cantidadEnCarrito(producto: Producto) : number {
    return this.usuarioLogueado.shoppingCart.cantidadProducto(producto)
  }

  finalizarCompra() {
    return this.usuarioLogueado.procesarCompra()
  }
}
