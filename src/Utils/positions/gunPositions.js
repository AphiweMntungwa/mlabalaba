// import { positionObjects } from "./Positions";

export class Guns {
    constructor(p1, p2, p3) {
        this[p1] = p1;
        this[p2] = p2;
        this[p3] = p3;
        this.gunArr = [p1, p2, p3]
    }
}

// const { a0, a3, a6, b1, b3, b5, c2, c3, c4, d0, d1, d2, d4, d5, d6, e2, e3, e4, f1, f3, f5, g0, g3, g6 } = positionObjects;

export const guns = [
    new Guns('a0', 'a3', 'a6'),
    new Guns('a0', 'd0', 'g0'),
    new Guns('a0', 'b1', 'c2'),
    new Guns('d0', 'd1', 'd2'),
    new Guns('d4', 'd5', 'd6'),
    new Guns('g0', 'f1', 'e2'),
    new Guns("g0", "g3", "g6"),
    new Guns("g3", "f3", "e3"),
    new Guns("g6", "f5", "e4"),
    new Guns("g6", "d6", "a6"),
    new Guns("a6", "b5", "c4"),
    new Guns("a3", "b3", "c3"),
    new Guns("b1", "b3", "b5"),
    new Guns("b1", "d1", "f1"),
    new Guns("f1", "f3", "f5"),
    new Guns("f5", "d5", "b5"),
    new Guns("c2", "c3", "c4"),
    new Guns("c4", "d4", "e4"),
    new Guns("e2", "e3", "e4"),
    new Guns("c2", "d2", "e2")
]