// let die = Math.floor(Math.random() * 6) + 1

function singSong() {
    console.log('DO')
    console.log('RE')
    console.log('MI')
}


function rollDie(number) {
    console.log(Math.floor(Math.random() * number) + 1)
}


function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0]}.!`)
}

function repeat(str, numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += str
    }
    console.log(result)
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    }
    return x + y
}

function capitalize(str) {
    let capital = str[0].toUpperCase()
    let restOfStr = str.slice(1)
    let capitalizedStr = capital + restOfStr
    return capitalizedStr
}

