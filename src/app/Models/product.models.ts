import { Image } from "./image.models";

export class Product {
    constructor(
        productId:number,
        productName: string,
        sku: string,
        price:string,
        sale: string,
        inventory: number,
        classify:string,
        status: boolean,
        image: Image
    ){

    }
}
