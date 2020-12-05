const GameboardFactory = require('../module/gameboard');

test('places ship at correct location', () => {
    let gameBoard1 = GameboardFactory();

    gameBoard1.placeShip(1, 1, 2, "vertical");
    expect(gameBoard1.board[1][1]).toBe(0);
    expect(gameBoard1.board[2][1]).toBe(0);
});

test('handles missed attack', () => {
    let gameBoard2 = GameboardFactory();
    gameBoard2.receiveAttack(6, 5);

    expect(gameBoard2.missedShotsY[0]).toBe(6);
    expect(gameBoard2.missedShotsX[0]).toBe(5);
});

test('handles hit attack', () => {
    let gameBoard3 = GameboardFactory();
    gameBoard3.placeShip(1, 1, 2, "vertical");
    gameBoard3.receiveAttack(2, 1);
    gameBoard3.receiveAttack(1, 1);

    expect(gameBoard3.ships[0].isSunk()).toBe(true);
});

test('reports all ships have been sunk', () => {
    let gameBoard4 = GameboardFactory();
    gameBoard4.placeShip(1, 1, 2, "vertical");
    gameBoard4.receiveAttack(2, 1);
    gameBoard4.receiveAttack(1, 1);

    expect(gameBoard4.isAllSunk()).toBe(true);
});