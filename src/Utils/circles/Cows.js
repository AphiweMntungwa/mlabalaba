export class Circle { //super class circle
    constructor(x, y, r = 6, stroke = "") {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.stroke = stroke;
    }
    getPosition() {
        return { x, y }
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
        return { x, y }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

}

class Cow extends Circle { //class for the cow piece of the game that extends the circle class
    constructor(x, y, r, stroke, redOrBlack = 'black', isOnBoard = false) {
        super(x, y, r, stroke);
        this.isOnBoard = isOnBoard;
        this.redOrBlack = redOrBlack;
        this.place = false;
    }
    getColor() {
        return this.redOrBlack;
    }
    position(position) {
        this.place = position;
    }
}

export const redCows = () => {
    return {
        r1: new Cow(null, null, 5, '', 'red'),
        r2: new Cow(null, null, 5, '', 'red'),
        r3: new Cow(null, null, 5, '', 'red'),
        r4: new Cow(null, null, 5, '', 'red'),
        r5: new Cow(null, null, 5, '', 'red'),
        r6: new Cow(null, null, 5, '', 'red'),
        r7: new Cow(null, null, 5, '', 'red'),
        r8: new Cow(null, null, 5, '', 'red'),
        r9: new Cow(null, null, 5, '', 'red'),
        r10: new Cow(null, null, 5, '', 'red'),
        r11: new Cow(null, null, 5, '', 'red'),
        r12: new Cow(null, null, 5, '', 'red'),
    }
}
export const blackCows = () => {
    return {
        b1: new Cow(null, null, 5, '', '#4c2b2b'),
        b2: new Cow(null, null, 5, '', '#4c2b2b'),
        b3: new Cow(null, null, 5, '', '#4c2b2b'),
        b4: new Cow(null, null, 5, '', '#4c2b2b'),
        b5: new Cow(null, null, 5, '', '#4c2b2b'),
        b6: new Cow(null, null, 5, '', '#4c2b2b'),
        b7: new Cow(null, null, 5, '', '#4c2b2b'),
        b8: new Cow(null, null, 5, '', '#4c2b2b'),
        b9: new Cow(null, null, 5, '', '#4c2b2b'),
        b10: new Cow(null, null, 5, '', '#4c2b2b'),
        b11: new Cow(null, null, 5, '', '#4c2b2b'),
        b12: new Cow(null, null, 5, '', '#4c2b2b')
    }
}
export default Cow;