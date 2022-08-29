export class Path {
    constructor(moveto, horizontal, vert, className = '') {
        this.m = moveto
        this.h = horizontal
        this.v = vert
        this.class = className
        this.stroke = 'black'
        this.strokeWidth = 1
    }
    getPath() {
        if (this.h) {
            return `m${this.m} h${this.h}`;
        } else if (!this.h && this.v) {
            return `m${this.m} v${this.v}`;
        } else {
            return null;
        }
    }
}

export const paths = {
    0: new Path("70 10", false, "120"),
    1: new Path("10 70", "120"),
    2: new Path("10 10", false, "120"),
    3: new Path("10 10", "120"),
    4: new Path("110 30", false, "80"),
    5: new Path("10 130", "120"),
    6: new Path("30 30", false, "80"),
    7: new Path("30 30", "80"),
    8: new Path("130 10", false, "120"),
    9: new Path("30 110", "80"),
    10: new Path("50 50", false, 40),
    11: new Path("50 50", 40),
    12: new Path("90 50", false, "40"),
    13: new Path("50 90", "40"),
    14: new Path('140 10', false, '40', "vert"),
    15: new Path('10 140', '40', false, 'vert-2'),
    16: new Path('0 10', false, '40', "vert-3"),
    17: new Path('0 90', false, '40', "vert-3")
}