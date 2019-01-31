import headsorTails from './coin-toss.js';


const coinForm = document.getElementById('coin-form');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');




coinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log('event function worked');
    
    const randomNumber = Math.random();
    //console.log(randomNumber);

    const coinFlip = headsorTails(randomNumber);
    //console.log(coinFlip);

    let imageSource = '';
    if(coinFlip === 'heads') {
        imageSource = './assests/heads.jpg';
        result.textContent = 'heads';  
    } 
    else {
        imageSource = './assests/tails.jpg';
        result.textContent = 'tails';
    }

    console.log(imageSource);
    image.src = imageSource;
    image.classList.remove('hidden');
});
