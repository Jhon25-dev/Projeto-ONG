import {
    configurarEventos,
    navegarPara
} from "./navegacao.js";


document.addEventListener(
    "DOMContentLoaded",
    function () {

        configurarEventos();

        navegarPara(
            window.location.pathname,
            false
        );

    }
);
