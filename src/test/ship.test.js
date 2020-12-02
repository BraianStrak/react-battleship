const ShipFactory = require('../module/ship');

const ship = ShipFactory(5);

test('returns its length', () => {
    let number = ship.length;
    expect(number).toBe(5);
});

