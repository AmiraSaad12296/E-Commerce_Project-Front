export class Order {

    constructor(
        public orderId: number,
        public status: string,
        public quantity: number,
        public orderDate: Date,
        public isCancel: boolean,
        public paymentId: number,
        public productName: string,
        public userId: number,

        public productId:number|null
    ){}

}
