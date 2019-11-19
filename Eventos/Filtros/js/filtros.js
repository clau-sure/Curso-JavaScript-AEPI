var precio = document.getElementById('precio');
var objetoLista = document.querySelector('#micompra');
var selectorCat = document.querySelector ('#categorias')
precio.addEventListener('keypress', capturaPrecio)
selectorCat.addEventListener('change', capturaCategoria)

function capturaPrecio(event) {
    
    if (event.keyCode == 13) {
       
        var coste = parseFloat(precio.value);

        pintarCompra(filtrarPorPrecio(listaCompra, coste));
    }
}

function capturaCategoria (event) {
    var categoria = event.target.value
    pintarCompra(filtrarPorCategoria(listaCompra, categoria))
}

function filtrarPorPrecio(pLista, pPrecio) {
    
    var listaCompraFiltrada = new Array();
    listaCompraFiltrada = pLista.filter(producto => producto.precio == pPrecio); 
    return listaCompraFiltrada;
}

function filtrarPorCategoria (pLista, pCategoria) {
    var listaCompraFiltrada = new Array ()
    for (objeto of pLista) {
        if (objeto.categoria == pCategoria) {
            listaCompraFiltrada.push(objeto)
        }
    }
    return listaCompraFiltrada;
}

function pintarCompra(pLista) {
    //AQUI PINTO LA LISTA
    var contenido = "";
    for (objeto of pLista) {
        contenido += `<li>
                        <p>${objeto.producto}</p>
                        <p>precio: ${objeto.precio}€</p>
                        <hr>
                     </li>`
    }
    objetoLista.innerHTML = contenido;
}