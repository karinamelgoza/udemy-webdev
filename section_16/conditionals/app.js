// let random = Math.random();

// if (random < 0.5) {
//     console.log("your numer is less than 0.5!")
// }
// else {
//     console.log('your number is greater than 0.5')
// }
// console.log(random)

// let dayOfWeek = prompt('enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('i hate mondays')
// }
// else if (dayOfWeek === 'saturday') {
//     console.log('yay its saturday')
// }
// else if (dayOfWeek === 'friday') {
//     console.log('fridays are fun')
// }
// else {
//     console.log('meh')
// }

// const age = 76;

// if (age < 5) {
//     console.log('you are a baby, you get in for free')
// }
// else if (age < 10) {
//     console.log('you are a child, you pay $10')
// }
// else if (age < 65) {
//     console.log('you are an adult, you pay $20')
// }
// else {
//     console.log('you are a senior, you pay $10')
// }

const password = prompt('please enter a new password')

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('valid password')
    }
    else {
        console.log('password cannot contain spaces')
    }
}
else {
    console.log('password too short, must be 6+ characters')
}