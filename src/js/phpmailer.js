const buttonSend = document.getElementById('button--send');

buttonSend.addEventListener('click', (e)=>{

    e.preventDefault();

    const data = new FormData(form);

    fetch('src/php/server.php', {
        method : 'post',
        body : data
    })
    .then(response => response.json())
    .then(response => {
        //manejo del frontend
        console.log(response);
    })

})