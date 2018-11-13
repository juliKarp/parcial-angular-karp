import { ShoppingCart } from "../domain/shoppingCart";

export class Usuario{

    username: string
    shoppingCart: ShoppingCart
    saldo: number
    
    constructor(username: string){
      this.username = username
      this.shoppingCart = new ShoppingCart([])
    }

    saldoInsuficiente() : boolean {
      return this.shoppingCart.getTotal() > this.saldo
    }
    procesarCompra() {
      this.saldo -= this.shoppingCart.getTotal()
      this.shoppingCart = new ShoppingCart([])
    }

    static fromJSON(usuarioJson): Usuario {
      var usuario = new Usuario(usuarioJson.username)
      usuario.saldo = usuarioJson.saldo
      usuario.shoppingCart = ShoppingCart.fromJSON(usuarioJson.shoppingCart)
      return usuario
    }

}