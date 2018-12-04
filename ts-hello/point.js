export class Pointer3 {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() { console.log('x:' + this._x + ',y: ' + this._y); }
    getDistance() { anotherPoint: Pointer3; }
    getX() { return this._x; }
    setX(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
    get y() { return this._y; }
    set y(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._y = value;
    }
}
