const ShipFactory = require('../module/ship');

test('checks whether position is hit', () => {
    let hitShip = ShipFactory(3);
    hitShip.hit(1);
    expect(hitShip.positionBools[1]).toBe(true);
});

test('checks whether it is sunk', () => {
    let ship = ShipFactory(3);

    let i = 0;
    for(i = 0; i < ship.length; i++){
        ship.hit(i);
    }
    
    expect(ship.isSunk()).toBe(true);
});