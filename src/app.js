/* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */
document.addEventListener("DOMContentLoaded", e => {
    console.log(e);

let items, nbSlide, suivant, prece, count;

items = document.querySelectorAll('img');
nbSlide = items.length;
suivant = document.querySelector('.right');
prece = document.querySelector('.left');
count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }     

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
prece.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
})