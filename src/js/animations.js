const cardAboutMe = document.getElementById('cardaboutme');
const cardLanguages   = document.getElementById('cardlanguages');
const cardTools   = document.getElementById('cardtools');

const showCard = (entradas)=>{

    entradas.forEach(entrada => {
        
        if(entrada.isIntersecting){

            entrada.target.classList.add('show');

        }else{

            entrada.target.classList.remove('show');

        }

    });

}

const observe = new IntersectionObserver(showCard, {
    root : null,
    rootMargin : '0px 0px 0px 0px',
    threshold : 1.0
})

observe.observe(cardAboutMe);
observe.observe(cardLanguages);
observe.observe(cardTools);