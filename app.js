const colors = ['red', 'yellow', 'blue', 'brown', 'orange', 'green', 'violet', 'indigo', 'gray']
const button = document.querySelector('button');
const body = document.querySelector('body')

button.addEventListener('click', e => {
   const  color =  Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[color];
})