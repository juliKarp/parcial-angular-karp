import { Producto } from "../domain/producto";

export class ShoppingCart {

    productos: Array<Producto> = []

    constructor(productos: Array<Producto>) {
        this.productos = productos
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    quitarProducto(producto: Producto) {
        const index = this.productos.indexOf(producto, 0);
        if (index > -1) {
            this.productos.splice(index, 1);
        }
    }

    getTotal() {
        if (this.productos.length === 0) {
            return 0
        }
        return this.productos.map(it => it.precioUnitario).reduce((a, b) => a + b)
    }

    tieneProducto(producto: Producto): boolean {
        return this.productos.indexOf(producto, 0) > -1
    }

    cantidadProducto(producto: Producto): number {
        return this.productos.filter(prod => prod === producto).length
    }

    estaVacio(): boolean {
        return this.productos.length == 0
    }

    static fromJSON(prodructosJson): ShoppingCart {
        return new ShoppingCart(prodructosJson.productos)
    }

}