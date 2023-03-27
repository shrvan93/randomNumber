let alphabet = 'abcdefgikjmnlopzxqrstv';

function shrvan() {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let randomLetter = alphabet.toUpperCase().charAt(randomIndex);
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    let letterElement = document.createElement('div');
    letterElement.classList.add('letter');
    letterElement.innerHTML = randomLetter;

    letterElement.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    letterElement.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    letterElement.style.backgroundColor = '#' + randomColor;

    setTimeout( () => {
        letterElement.parentElement.removeChild(letterElement)
        //letterElement.textContent = ''
    },3000)
    document.body.appendChild(letterElement);

}

setInterval(shrvan, 1000);


