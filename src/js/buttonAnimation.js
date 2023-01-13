
function checker(element, state) {
    if(state === 'success'){

        element.childNodes[5].style.display = 'none';
        element.childNodes[7].style.display = 'block'
        element.classList.remove('button--send');
        element.classList.add('button--success');

    }else{

        element.childNodes[5].style.display = 'none';
        element.childNodes[9].style.display = 'block';
        element.classList.add('button--failure');

    }
}

function loader(state){
    //capturamos todos los botones de mi pagina
    const buttons = document.querySelectorAll('.button');
    //recorremos todos con un foreach
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {

            //quien reciba un evento click tendra modificaciones
            e.preventDefault();

            //ocultar icono static
            button.childNodes[3].style.display = 'none';

            //ocultar label
            button.childNodes[1].style.display = 'none';

            //mostrar loader
            button.childNodes[5].style.display = 'flex';

            //agregar estilos al button
            button.classList.add('button--send')

            //ejecutamos la funcion que verifica el
            //estado del envío    
            checker(button, state);
        })
    }); 
}

loader('success');