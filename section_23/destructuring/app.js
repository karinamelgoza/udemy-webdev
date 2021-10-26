const scores = [555,233, 123, 76,54,43,1]

const highScore = scores[0]
const secondHighScore = scores[1]

const [gold, silver, bronze, ...everyoneElse] = scores


const user = {
    email: 'harvey@gmail.com',
    password: 'password3',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio:'Harvey Milk was an American politician.',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzales',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName
// const lastName = user.lastName

// const {email, firstName, lastName} = user

const {born: birthYear, died = 'N/A'} = user

// const {city, state, died = 'N/A'} = user2

// function fullName(user){
//     const {firstName, lastName} = user
//     return `${firstName} ${lastName}`
// }

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({score}) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})