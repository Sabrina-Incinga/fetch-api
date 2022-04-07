// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
let tarjeta = document.querySelector('.tarjeta');
let btnContainer = document.querySelector('.btnContainer');
let apiUrl = 'https://randomuser.me/api/'

function petition(url){
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data);
        let objeto = {
            nombre: data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last,
            email: data.results[0].email,
            url: data.results[0].picture.large
        }
        console.log(objeto);
        renderizarDatosUsuario(objeto);
    })
    .catch( error => {
        //Aca recibimos algo que viene rechazado(Ejemplo: "Problema X")
        console.log(error);
    });
    
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    tarjeta.innerHTML = "";
    tarjeta.innerHTML += `<p style="text-align:center">${datos.nombre}</p>
                            <p style="text-align:center">${datos.email}</p>
                            <img style="margin-left:120px" src="${datos.url}">`;
    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
btnContainer.addEventListener("click", () => {
    petition(apiUrl);
})