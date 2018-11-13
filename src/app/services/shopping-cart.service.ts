import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario';
import { Producto } from '../domain/producto';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: Http) { }

  async getUsuarioLogueado() {
    const res = await this.http.get('http://shopping-cart.y9fyqbatm4.us-west-2.elasticbeanstalk.com/usuarioLogueado').toPromise()
    return Usuario.fromJSON(res.json())
  }

  async getProductos() {
    const res = await this.http.get('http://shopping-cart.y9fyqbatm4.us-west-2.elasticbeanstalk.com/productos').toPromise()
    return res.json().map(prod => {return Producto.fromJSON(prod)})
  }

}
