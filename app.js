const CARDS = document.querySelectorAll('.card-inner');
const ITEM = document.querySelector('.card');

// rotate on click
CARDS.forEach(function(cardBody){
    cardBody.addEventListener('click', function(e){
        if(cardBody.style.transform === 'rotateY(180deg)'){
            cardBody.style.transform = 'rotateY(0deg)'
        }else{
            cardBody.style.transform = 'rotateY(180deg)';
        }
    });
});