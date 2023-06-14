const btn = document.querySelector('.btn');
const body = document.querySelector('body');

const colors = ['rgb(243, 0, 0)', 'rgb(227, 243, 0)', 'rgb(0, 243, 61)', 'rgb(0, 36, 243)'] 

btn.addEventListener('click', changeBtn);

function changeBtn() {
body.style.background = colors[Math.round(Math.random() * colors.length) ];
}
