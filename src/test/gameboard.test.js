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

test.todo('handles hit attack');

test.todo('reports all ships have been sunk');