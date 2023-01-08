const cardAboutMe     = document.getElementById('card__aboutme');
const cardLanguages   = document.getElementById('card__languages');
const cardTools       = document.getElementById('card__tools');


console.log(cardAboutMe);
console.log(cardLanguages);
console.log(cardTools);

const showCard = (entradas)=>{

    entradas.forEach(entrada => {
        
        if(entrada.isIntersecting){

            entrada.target.classList.add('card__show');

        }else{
            
            entrada.target.classList.remove('card__show');

        }

    });

}

const observe = new IntersectionObserver(showCard, {
    root : null,
    rootMargin : '0px 0px 0px 0px',
    threshold : 0.5
})

observe.observe(cardAboutMe);
observe.observe(cardLanguages);
observe.observe(cardTools);