import { Circle } from "../circles/Cows";

//class for game positions and some properties that extends circle
class Position extends Circle {
    constructor(x, y, neighbors, r, stroke, isOccupied = false, occupiedBy = '') {
        super(x, y, r, stroke);
        this.isOccupied = isOccupied;
        this.occupiedBy = occupiedBy
        this.neighbors = neighbors;
    }
    occupy(cow) {
        this.isOccupied = true;
        this.occupiedBy = cow;
    }
    vacate() {
        this.isOccupied = false;
        this.occupiedBy = '';
    }
}

//creating all 24 positions from positions class and naming them
export const positionObjects = {
    a0: new Position(10, 10, { d0: 'd0', a3: 'a3', b1: 'b1' }),
    a3: new Position(10, 70, { a0: 'a0', a6: 'a6', b3: 'b3' }),
    a6: new Position(10, 130, { a3: 'a3', d6: 'd6', b5: 'b5' }),
    b1: new Position(30, 30, { a0: 'a0', b3: 'b3', d1: 'd1', c2: 'c2' }),
    b3: new Position(30, 70, { a3: 'a3', b5: 'b5', b1: 'b1', c3: 'c3' }),
    b5: new Position(30, 110, { a6: 'a6', d5: 'd5', b3: 'b3', c4: 'c4' }),
    c2: new Position(50, 50, { b1: 'b1', d2: 'd2', c3: 'c3' }),
    c3: new Position(50, 70, { b3: 'b3', c4: 'c4', c2: 'c2' }),
    c4: new Position(50, 90, { b5: 'b5', d4: 'd4', c3: 'c3' }),
    d0: new Position(70, 10, { d1: 'd1', a0: 'a0', g0: 'g0' }),
    d1: new Position(70, 30, { d2: 'd2', b1: 'b1', f1: 'f1', d0: 'd0' }),
    d2: new Position(70, 50, { d1: 'd1', c2: 'c2', e2: 'e2' }),
    d4: new Position(70, 90, { d5: 'd5', e4: 'e4', c4: 'c4' }),
    d5: new Position(70, 110, { d6: 'd6', f5: 'f5', b5: 'b5', d4: 'd4' }),
    d6: new Position(70, 130, { d5: 'd5', g6: 'g6', a6: 'a6' }),
    e2: new Position(90, 50, { f1: 'f1', d2: 'd2', e3: 'e3' }),
    e3: new Position(90, 70, { f3: 'f3', e4: 'e4', e2: 'e2' }),
    e4: new Position(90, 90, { f5: 'f5', d4: 'd4', e3: 'e3' }),
    f1: new Position(110, 30, { g0: 'g0', f3: 'f3', d1: 'd1', e2: 'e2' }),
    f3: new Position(110, 70, { g3: 'g3', f5: 'f5', f1: 'f1', e3: 'e3' }),
    f5: new Position(110, 110, { g6: 'g6', d5: 'd5', f3: 'f3', e4: 'e4' }),
    g0: new Position(130, 10, { g3: 'g3', d0: 'd0', f1: 'f1' }),
    g3: new Position(130, 70, { f3: 'f3', g6: 'g6', g0: 'g0' }),
    g6: new Position(130, 130, { f5: 'f5', d6: 'd6', g3: 'g3' })
}


export default Position;