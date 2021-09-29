// const password = prompt('enter your password');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('valid password')
// }
// else {
//     console.log('incorrect format')
// }

// const age = 65;

// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log('free')
// }
// else if (age >= 5 && age < 10) {
//     console.log('$10')
// }
// else if (age >= 10 && age < 65) {
//     console.log('$20')
// }
// else {
//     console.log('invalid age')
// }

// const fristName = prompt('enter your first name');
// if (!fristName) {
//     fristName = prompt('try again!')
// }

const age = 64;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log('you are not a baby or a senior')
}