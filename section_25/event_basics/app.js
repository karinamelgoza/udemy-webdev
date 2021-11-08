const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log('you clicked me')
    console.log('i hope it works')
}

function scream(){
    console.log('aaahhhhh')
}

btn.onmouseenter = scream

document.querySelector('h1').onclick = () => {
    alert('hello')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function(){
    alert('clicked')
})

function twist() {
    console.log('twist')
}

function shout() {
    console.log('shout')
}

const tasBtn =  document.querySelector('#tas')

// tasBtn.onclick = twist
// tasBtn.onclick = shout

tasBtn.addEventListener('click', twist, {once:true})
tasBtn.addEventListener('click', shout)