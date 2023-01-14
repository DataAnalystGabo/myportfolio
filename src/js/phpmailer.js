import { Button } from "./Button.js";
const form       = document.getElementById('form');
const alertEmail = document.querySelector('.form__alert--email');

function emailInvalid(){
    
    alertEmail.style.display = 'block';
    alertEmail.innerHTML     = `<strong>El formato del email ingresado es incorrecto</strong>`;
    alertEmail.previousElementSibling.firstElementChild.classList.add('form__input--error');

    setTimeout(() => {
        alertEmail.style.display = 'none';
        alertEmail.innerHTML     = '';
        alertEmail.previousElementSibling.firstElementChild.classList.remove('form__input--error');
    }, 4000);

}

function validatorInput(){

    const inputs = document.querySelectorAll('.form__input');
    
    inputs.forEach(input => {
        
        if(input.value === ''){

            input.classList.add('form__input--error');
            input.parentNode.nextElementSibling.style.display = 'block';

            if(input.nextElementSibling){
                
                input.nextElementSibling.style.display = 'block';

            }            
        }

        setTimeout(() => {

            input.classList.remove('form__input--error');
            input.parentNode.nextElementSibling.style.display = 'none';

            if(input.nextElementSibling){
                
                input.nextElementSibling.style.display = 'none';

            }
            
        }, 4000);
    });


}



document.getElementById('btnsendemail').addEventListener('click', (e) => {

    e.preventDefault();

    const data   = new FormData(form);
    const button = new Button('sendemail');

    button.loader();

    fetch('src/php/server.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(response => {

        switch (response) {
            case 'success':

                button.success();
                form.reset()
                
                break;

            case 'empty-inputs':

                button.failure();
                validatorInput();

                break;

            case 'failure':

                button.failure();

                break;

            case 'invalid-email':
                
                button.failure();
                emailInvalid();

                break;
            
            default:
                break;
        }
    })
})