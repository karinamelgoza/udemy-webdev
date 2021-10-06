// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num
//     },
//     cube: function (num) {
//         return num ** 3
//     }
// }

// shorthand
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num
    },
    cube(num) {
        return num ** 3
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW`)
    }
}