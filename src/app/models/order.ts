export class Order {

    constructor(
        public orderId: number,
        public status: string,
        public quantity: number,
        public orderDate: Date
    ){}

}
