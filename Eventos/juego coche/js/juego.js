var ferrari = document.querySelector('#coche1');
var mercedes = document.querySelector('#coche2');
var redbull = document.querySelector('#coche3');
var acelerarRojo = 0;
var acelerarGris = 0;
var acelerarAzul = 0;
var nitro = 3;
var meta = 665;

document.addEventListener('keydown', acelerarFerrari);

function acelerarFerrari(event) {
    switch (event.keyCode) {
        case 32:
            //acelerar
            acelerarRojo += 15;
            break;

        case 78:
            //NEED NITRO
            if (nitro > 0) {
                acelerarRojo += 40;
                nitro--;
            }
            break;

    }
    if (ferrari.offsetLeft < meta) {
        ferrari.style.marginLeft = acelerarRojo + "px";
    }
    else {
        clearInterval(intervalo1, intervalo2);
        document.getElementById('mensaje').innerText = "Ha ganado Ferrari";
    }

    //console.log(ferrari.offsetLeft);
}

//setTimeOut acciona la función a los x milesegundo

//setInterval repita la funcion tantas veces por milisegundos que tengamos marcados.

var intervalo1 = setInterval(acelerarMercedes, 100);
var contador = 0;

function acelerarMercedes() {

    if (mercedes.offsetLeft < meta) {
        acelerarGris += 12;
        mercedes.style.marginLeft = acelerarGris + 'px';
    }
    else {
        document.removeEventListener('keydown', acelerarFerrari);
        document.getElementById('mensaje').innerText = "Ha ganado mercedes";
    }
}

var intervalo2 = setInterval(acelerarRedbull, 100);

function acelerarRedbull() {
    //Math.random() numero aleatorio en 0 y 1 sin incluir el 1.
    if (redbull.offsetLeft < meta) {
        acelerarAzul += Math.random() * 21;
        redbull.style.marginLeft = acelerarAzul + 'px';
    } else {
        document.getElementById('mensaje').innerText = "Ha ganado Redbull";
    }

}