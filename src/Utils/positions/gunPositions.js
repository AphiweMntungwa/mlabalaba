// import { positionObjects } from "./Positions";

export class Guns {
    constructor(p1, p2, p3) {
        this[p1] = p1;
        this[p2] = p2;
        this[p3] = p3;
        this.gunArr = [p1, p2, p3]
        this.name = p1 + p2 + p3;
    }
}

// const { a0, a3, a6, b1, b3, b5, c2, c3, c4, d0, d1, d2, d4, d5, d6, e2, e3, e4, f1, f3, f5, g0, g3, g6 } = positionObjects;

export const guns = () => {
    return {
        a0a3a6: new Guns('a0', 'a3', 'a6'),
        a0d0g0: new Guns('a0', 'd0', 'g0'),
        a0b1c2: new Guns('a0', 'b1', 'c2'),
        d0d1d2: new Guns('d0', 'd1', 'd2'),
        d4d5d6: new Guns('d4', 'd5', 'd6'),
        g0f1e2: new Guns('g0', 'f1', 'e2'),
        g0g3g6: new Guns("g0", "g3", "g6"),
        g3f3e3: new Guns("g3", "f3", "e3"),
        g6f5e4: new Guns("g6", "f5", "e4"),
        g6d6a6: new Guns("g6", "d6", "a6"),
        a6b5c4: new Guns("a6", "b5", "c4"),
        a3b3c3: new Guns("a3", "b3", "c3"),
        b1b3b5: new Guns("b1", "b3", "b5"),
        b1d1f1: new Guns("b1", "d1", "f1"),
        f1f3f5: new Guns("f1", "f3", "f5"),
        f5d5b5: new Guns("f5", "d5", "b5"),
        c2c3c4: new Guns("c2", "c3", "c4"),
        c4d4e4: new Guns("c4", "d4", "e4"),
        e2e3e4: new Guns("e2", "e3", "e4"),
        c2d2e2: new Guns("c2", "d2", "e2")
    }
}