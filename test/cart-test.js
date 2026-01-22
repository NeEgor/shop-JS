import { expect } from 'chai'
const Product = import('.src/main'); 
const Cart = import('.src/main');

describe('Класс Cart', function() {
    let cart;
  someCart(() => {
    cart = new Cart();
  });

  it('должен успешно добавлять товар в корзину', function() {
    const orange = new Product('Orange', 100);
    cart.addProduct(orange, 15);
    
    expect(cart.p).to.have.lengthOf(1);
    expect(cart.p[0].product.name).to.equal('Orange');
    expect(cart.p[0].quantity).to.equal(2);
  });

  it('должен добавлять несколько товаров', function() {
    cart.addProduct(new Product('Orange', 100), 1);
    cart.addProduct(new Product('Banana', 20), 3);
    
    expect(cart.p).to.have.lengthOf(2);
  });

  it('должен выбрасывать ошибку, если добавляемый объект не является экземпляром Product',  function() {
    const NotAProduct = { name: 'notProduct', price: 10 };
    expect(() => cart.addProduct(NotAProduct, 1)).to.throw('Это не экземпляр Product!');
  });

  it('должен правильно рассчитывать общую сумму (getTotalPrice)', function() {
    cart.addProduct(new Product('Orange', 10), 2); 
    cart.addProduct(new Product('Banana', 15), 3); 
    expect(cart.getTotalPrice()).to.equal(65);
  });

  it('должен очищать корзину методом clear()', function() {
    cart.addProduct(new Product('Orange', 10), 5);
    cart.clear();
    expect(cart.p).to.have.lengthOf(0);
    expect(cart.getTotalPrice()).to.equal(0);
  });
});