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


// let input = prompt('Hey, say something!')
// while (true) {
//     input = prompt(input)
//     if (input === 'stop copying me') {
//         break
//     }
// }
// console.log('ok')

let maximum = parseInt(prompt('Enter the maximum number!'))
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'))
}

const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt('Enter you first guess!'))
let attempts = 1
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break
    }
    attempts++
    if (guess > targetNum) {
        guess = prompt('Too high! Guess again!')
    } else {
        guess = prompt('Too low! Guess again!')
    }
}
if (guess === 'q') {
    console.log('You quit.')
} else {
    console.log(`You got it! It took you ${attempts} guesses.`)
}