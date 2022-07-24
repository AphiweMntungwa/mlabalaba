class Position {
    constructor(x, y, r = 1, stroke = "crimson") {
        this.position = { x, y };
        this.isOccupied = false;
        this.radius = r;
        this.stroke = stroke;
    }
    occupy() {
        this.isOccupied = true;
    }
}

function spit(x, y) {
    const position = new Position(x, y);
}

export const positionObjects = {
    a0: new Position(10, 10),
    a3: new Position(10, 70),
    a6: new Position(10, 130),
    b1: new Position(30, 30),
    b3: new Position(30, 70),
    b5: new Position(30, 110),
    c2: new Position(50, 50),
    c3: new Position(50, 70),
    c4: new Position(50, 90),
    d0: new Position(70, 10),
    d1: new Position(70, 30),
    d2: new Position(70, 50),
    d4: new Position(70, 90),
    d5: new Position(70, 110),
    d6: new Position(70, 130),
    e2: new Position(90, 50),
    e3: new Position(90, 70),
    e4: new Position(90, 90),
    f1: new Position(110, 30),
    f3: new Position(110, 70),
    f5: new Position(110, 110),
    g0: new Position(130, 10),
    g3: new Position(130, 70),
    g6: new Position(130, 130)
}

export default Position;