const colors = ['red', 'yellow', 'blue', 'brown', 'orange', 'green', 'violet', 'indigo', 'gray']
const button = document.querySelector('button');
const body = document.querySelector('body')
const parah = document.querySelector('p')
const span = document.createElement('span')

button.addEventListener('click', e => {
   const  color =  Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[color];
    span.textContent = colors[color].toUpperCase()
    span.style.fontSize = '35px'
    parah.textContent = `The Current color is: `
    parah.appendChild(span)
})