import { expect } from 'chai';

const Product = import('..src/main');

describe('Тестирование класса Product', function () {


it('должен корретно создавать экземпляр класса', function () {
    const p = new Product ('Orange', 100);
    expect(p.name).to.equal('Orange');
    expect(p.price).to.equal(100);
});

it('должен выдавать ошибку при отрицательной сумме', function () {
    expect(() => new Product('Orange', -54)).to.throw('Неверная цена!');
}); 

it('метод getInfo() должен работать корректно', function() {
    const p = new Product('Orange', 100);
    const expectedString = `Товар: ${this.name}, Цена: ${this.price}`;
    expect(p.getInfo()).to.equal(expectedString);
});    
});