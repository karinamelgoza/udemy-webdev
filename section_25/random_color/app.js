const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

btn.addEventListener('click', function () {
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor[0]
    h1.innerText = newColor[0]
    if (newColor[1] < 200) {
        h1.style.color = 'white'
    } else {
        h1.style.color = 'black'
    }
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const sum = r + g + b
    return newColor = [`rgb(${r}, ${g}, ${b})`, sum]
}