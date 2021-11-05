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