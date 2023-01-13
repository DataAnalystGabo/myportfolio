const cardAboutMe        = document.getElementById('card__aboutme');
const cardLanguages      = document.getElementById('card__languages');
const cardTools          = document.getElementById('card__tools');
const cardCertifications = document.getElementById('card__certifications');
const cardProyectsOne    = document.getElementById('card__proyects--one');
const cardProyectsTwo    = document.getElementById('card__proyects--two');

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
observe.observe(cardCertifications);
observe.observe(cardProyectsOne);
observe.observe(cardProyectsTwo);