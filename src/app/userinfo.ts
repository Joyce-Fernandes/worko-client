import { Order } from "./order";

export interface Userinfo {
    id:number,
    name:string,
    surname:string,
    email: string,
    password:string,
    adress:string,
    rol: string,
    orders: Order[]
}