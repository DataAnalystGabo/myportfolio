const cardAboutMe        = document.getElementById('card__aboutme');
const cardLanguages      = document.getElementById('card__languages');
const cardTools          = document.getElementById('card__tools');
const cardCertifications = document.getElementById('card__certifications');
const cardProyectsOne    = document.getElementById('card__proyects--one');
const cardProyectsTwo    = document.getElementById('card__proyects--two');

const showCard = (entradas) => {
    entradas.forEach(entrada => {
        (entrada.isIntersecting)?
            entrada.target.classList.add('card__show'):
            entrada.target.classList.remove('card__show');
    });
}

const observeCards = new IntersectionObserver(showCard, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
})

observeCards.observe(cardAboutMe);
observeCards.observe(cardLanguages);
observeCards.observe(cardTools);
observeCards.observe(cardCertifications);
observeCards.observe(cardProyectsOne);
observeCards.observe(cardProyectsTwo);