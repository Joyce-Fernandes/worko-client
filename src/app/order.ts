export interface Order {
     id: number,
     date: Date,
     shippingDate: Date,
     orderFinishDate: Date,
     totalPrice: number,
     paymentState: number,
     userId: number,
     couponId: number   
}
