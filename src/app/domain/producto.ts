export class Producto {

    titulo: string
    precioUnitario: number
    urlFoto: string

    static fromJSON(jsonProducto): Producto {
        var prod = new Producto() 
        return Object.assign(prod, jsonProducto)
    }

}