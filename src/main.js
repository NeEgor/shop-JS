// Это продукт
class Product {
    constructor(name, price) {
        if (price < 0) {
            throw new Error("Неверная цена!");
        }
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `Товар: ${this.name}, Цена: ${this.price}`;
    }
}

try {
    let p = new Product("Apple", 10);
    console.log(p.getInfo());
} catch (e) {
    console.error(`Ошибка: ${e.message}!`);
}

// Это корзина
class Cart {
    constructor() {
        
        this.p = [];
    }

    addProduct(product, quantity = 1) {
       
        if (!(product instanceof Product)) {
            throw new Error("Это не экземпляр Product!");
        }

        if (quantity <= 0) {
             throw new Error("Количество товаров должно быть положительным!");
        }

        this.p.push({ product, quantity });
    }

    getTotalPrice() {
        
        return this.p.reduce((totalPrice, cartItem) => {
           
            return totalPrice + (cartItem.product.price * cartItem.quantity);
        }, 0); 
    }

    clear() {
        this.p = [];
    }
}

let orange = new Product('Orange','100');
let kiwi = new Product('Kiwi','150')

let MyCart = new Cart();

MyCart.addProduct(orange, 15);
MyCart.addProduct(kiwi, 5);

MyCart.getTotalPrice();

console.log(`Товары в корзине: ${MyCart.items}`);
console.log(`Общая сумма: ${MyCart.getTotalPrice()}`);