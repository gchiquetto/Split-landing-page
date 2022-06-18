const boxPs5 = document.querySelector('.box-ps5');
const boxXbox = document.querySelector('.box-xbox');


boxPs5.addEventListener('click',  ()=> {
    boxPs5.classList.add('above');
    boxXbox.classList.add('under');
});

boxPs5.addEventListener('mouseleave',  ()=> {
    boxPs5.classList.remove('above');
    boxXbox.classList.remove('under');
});

boxXbox.addEventListener('click',  ()=> {
    boxPs5.classList.add('under');
    boxXbox.classList.add('above');
});

boxXbox.addEventListener('mouseleave',  ()=> {
    boxPs5.classList.remove('under');
    boxXbox.classList.remove('above');
});

