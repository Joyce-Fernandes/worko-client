import { DeclarationListEmitMode } from "@angular/compiler";

export interface Coupon {
    id: number,
    name: string,
    startDate: Date,
    endDate: Date,
    discount:number,
}
