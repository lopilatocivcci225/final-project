class Car extends Vehicle {
    constructor(modelName: string, price: number) {
        super();
        this.modelName = modelName;
        this.price = price;
    }
}

let myCar = new Car("Ferrari", 1000);
console.log(`I have a ${myCar.modelName}, which costs ${myCar.price}.`);
