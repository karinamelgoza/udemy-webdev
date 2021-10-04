// let count = 0
// while (count < 10) {
//     count++
//     console.log(count);
// }

// const secret = 'BabyHippo'

// let guess = prompt('enter the secret code...')
// while (guess !== secret) {
//     guess = prompt('enter the secret code...')
// }
// console.log('Congrats you got the secret!')


let input = prompt('Hey, say something!')
while (true) {
    input = prompt(input)
    if (input === 'stop copying me') {
        break
    }
}
console.log('ok')