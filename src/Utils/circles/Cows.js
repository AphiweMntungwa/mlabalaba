class Cow {
    constructor(x, y, r = 2) {
        this.position = { x, y }
        this.radius = r;
        this.isPlaying = false;
    }
    moveX() {
        this.x + 10;
    }
    moveY() {
        this.y + 10;
    }
}

export default Cow;