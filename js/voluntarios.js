import {
    obterVoluntarios,
    salvarVoluntarios
} from "./storage.js";

import {
    mostrarToast
} from "./toast.js";


export function configurarFormulario() {

    const formulario =
        document.getElementById("formulario-voluntario");

    if (!formulario) {
        return;
    }


    formulario.addEventListener("input", function (event) {

        const campo = event.target;

        if (campo.tagName !== "INPUT") {
            return;
        }

        if (campo.validity.valid) {

            campo.classList.remove("campo-erro");

            campo.classList.add("campo-sucesso");

        } else {

            campo.classList.remove("campo-sucesso");

            campo.classList.add("campo-erro");
        }

    });


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;
        }


        const voluntario = {

            nome:
                document.getElementById("nome").value,

            email:
                document.getElementById("email").value,

            dataNascimento:
                document.getElementById("data_nascimento").value,

            cpf:
                document.getElementById("cpf").value,

            telefone:
                document.getElementById("telefone").value,

            cep:
                document.getElementById("cep").value,

            endereco:
                document.getElementById("endereco").value,

            cidade:
                document.getElementById("cidade").value,

            estado:
                document.getElementById("estado").value
        };


        const voluntarios =
            obterVoluntarios();


        voluntarios.push(voluntario);


        salvarVoluntarios(voluntarios);


        mostrarToast(
            "Voluntário cadastrado com sucesso!"
        );


        formulario.reset();


        formulario
            .querySelectorAll("input")
            .forEach(function (campo) {

                campo.classList.remove("campo-erro");

                campo.classList.remove("campo-sucesso");

            });


        renderizarVoluntarios();

    });
}


export function renderizarVoluntarios() {

    const lista =
        document.getElementById("lista-voluntarios");

    if (!lista) {
        return;
    }


    const voluntarios =
        obterVoluntarios();


    if (voluntarios.length === 0) {

        lista.innerHTML =
            "<p>Nenhum voluntário cadastrado.</p>";

        return;
    }


    lista.innerHTML =
        voluntarios.map(function (voluntario) {

            return `
                <article class="card">

                    <h3>${voluntario.nome}</h3>

                    <p>
                        <strong>E-mail:</strong>
                        ${voluntario.email}
                    </p>

                    <p>
                        <strong>Telefone:</strong>
                        ${voluntario.telefone}
                    </p>

                    <p>
                        <strong>Cidade:</strong>
                        ${voluntario.cidade}
                    </p>

                </article>
            `;

        }).join("");
}
