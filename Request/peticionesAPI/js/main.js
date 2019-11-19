var url = "https://reqres.in/api/users?page=2";
var listado = document.querySelector('#listaContactos ul');
var zonaUsuario = document.querySelector ('#vistaContacto')

var pedido = new XMLHttpRequest();

//abrir la url que me pasan para hacer mi pedido.

pedido.open('GET', url, true);

//envio el pedido

pedido.send();

//estar atentos a los cambios que sufre mi pedido.

pedido.addEventListener('readystatechange', cargarArchivo);

function cargarArchivo(event) {
    //para estar seguro de que mi informacion ha llego debo comprar que readyState == 4 y status == 200
    if (event.target.readyState == 4 && event.target.status == 200) {
        //el pedido ha llegado

        // console.log(typeof (event.target.responseText));

        var objetoJson = JSON.parse(event.target.responseText);

        //console.log(objetoJson);

        var listaPersonas = new Array();
        listaPersonas = objetoJson.data;

        pintarLista(listaPersonas);
    }
    else {
        console.log('Mi pedido aun no ha llegado');
    }
}


function pintarLista(pListaContactos) {
    listado.innerHTML = "";
    for (contacto of pListaContactos) {
        listado.innerHTML += `<li>
                                 <a onclick="cargarUsuario(${contacto.id})" href="#">
                                <img src="${contacto.avatar}">
                                <span>
                                     ${contacto.first_name}
                                </span>
                                </a>
                            </li>`;
    }
}


function cargarUsuario(pId) {
    var urlUser = 'https://reqres.in/api/users/' + pId

    var pedidoUsuario = new XMLHttpRequest()

    pedidoUsuario.open ('GET', urlUser, true)

    pedidoUsuario.send()

    pedidoUsuario.addEventListener('readystatechange', cargarDatosUsuario)
}

function cargarDatosUsuario (event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        var objetoUsuario = JSON.parse(event.target.responseText)

        pintarUsuario (objetoUsuario.data)
    }
}

function pintarUsuario (pObjetoJson) {
    console.log(pObjetoJson);
    zonaUsuario.innerHTML = ''

    zonaUsuario.innerHTML += `<div class="imagen">
                                <img src="${pObjetoJson.avatar}" alt="${pObjetoJson.first_name}">
                            </div>
                            <div class="datos">
                                <ul>
                                    <li>${pObjetoJson.first_name}</li>
                                    <li>${pObjetoJson.last_name}</li>
                                    <li><a href="${pObjetoJson.email}:">${pObjetoJson.email}</a></li>
                                </ul>`
}