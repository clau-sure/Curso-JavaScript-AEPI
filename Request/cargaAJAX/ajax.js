var seccion = document.querySelector("#contenido")

var enlaces = document.querySelectorAll('header nav a')

enlaces.forEach(enlace => enlace.addEventListener('click', cargarContenido))

function cargarContenido (event) {
    event.preventDefault()
    var peticion = new XMLHttpRequest()
    if (event.target.dataset.nombre === 'docu3') {
        var url = event.target.dataset.nombre + '.txt'
    }
    else {
        var url = event.target.dataset.nombre + '.html'
    }
    
    peticion.open('GET', url, true)
    peticion.send()
    peticion.onload = event => {
        var texto = event.target.responseText

        seccion.innerHTML = texto
    }
}