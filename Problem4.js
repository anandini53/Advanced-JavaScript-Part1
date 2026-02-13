/**
 * Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand], 
Model: [model]". Test the method using this keyword.
 */


const car = {
    brand: "Tata Motors",
    model: "Tata Curvv EV",

    displayDetails: function() {
        console.log("Brand: " + this.brand + ", Model: " + this.model);
    }
}

// Test the method using this keyword

car.displayDetails();
