
function loger(message) {
    console.log(message);
}

var message2 = 'hw';

loger(message2);
/********************************* */
let number: number;
number = 1234;

let array: any[] = [1,2,3];
array[0] = "F";


//enum weekdays {monday = 0, tuesday = 1, friday = 4 };
//let firstDay = weekdays.monday;

/********************************* */
let message;

message = 'abc';

let end1 = (<string>message).endsWith('d');
let end2 = (message as string).endsWith('d');

/********************************* */

let doLog = () => console.log();

/********************************* */


interface Point{
    x:number,
    y:number
}

let drawPoint2 = (point: Point) => {

}

let drawPoint = (point: {x:number, y:number}) => {

}

drawPoint({
    x: 1,
    y: 2
})

/********************************* */

let getDistance = (poinA:Point, pointB:Point) =>{

}

class Pointer {
    x:number;
    y:number;

    draw() {console.log('x:'+this.x +',y: '+ this.y)}
    getDistance() {anotherPoint: Pointer}
}
/********************************* */
let point = new Pointer();
point.x = 1;
point.draw();

/********************************* */
class Pointer2 {
    private x:number;
    y:number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }
    draw() {console.log('x:'+this.x +',y: '+ this.y)}
    getDistance() {anotherPoint: Pointer}
}

let point2 = new Pointer2(2,1);
let point3 = new Pointer2();
point2.draw();
point3.draw();

/********************************* */

let Pointer5 = require('./point')

let point4 = new Pointer5(1,3);
point4.draw();

point4.setX(3);
point4.y = 7
point4.draw();
/********************************* */
/********************************* */
/********************************* */