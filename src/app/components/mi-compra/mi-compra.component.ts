import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { Producto } from 'src/app/domain/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-compra',
  templateUrl: './mi-compra.component.html',
  styleUrls: ['./mi-compra.component.css']
})
export class MiCompraComponent implements OnInit {

  usuarioLogueado: Usuario = new Usuario("")
  productos: Array<Producto> = []
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cantidadEnCarrito(producto: Producto) : number {
    return this.usuarioLogueado.shoppingCart.cantidadProducto(producto)
  }

  aceptar() {
    this.usuarioLogueado.procesarCompra()
    this.router.navigate(['/'])
  }

  cancelar() {
    this.router.navigate(['/'])
  }
}
