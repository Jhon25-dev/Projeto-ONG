import {
    renderizarProjetos
} from "./projetos.js";

import {
    configurarFormulario,
    renderizarVoluntarios
} from "./voluntarios.js";

import {
    mostrarToast
} from "./toast.js";


export function navegarPara(rota, adicionarHistorico = true) {

    const conteudo = document.getElementById("conteudo-principal");

    if (!conteudo) {
        return;
    }

    if (adicionarHistorico) {
        history.pushState(
            { rota: rota },
            "",
            rota
        );
    }

    conteudo.innerHTML = "";

    if (rota.includes("projeto")) {

        conteudo.innerHTML = `
            <section id="projetos">

                <h2>Nossos Projetos</h2>

                <p class="projetos-introducao">
                    Conheça nossas iniciativas de inclusão digital
                    e educação tecnológica.
                </p>

                <div id="lista-projetos"></div>

            </section>
        `;

        renderizarProjetos();

        return;
    }


    if (rota.includes("formulario")) {

        conteudo.innerHTML = `
            <section>

                <h2>Cadastro de Voluntário</h2>

                <form id="formulario-voluntario">

                    <fieldset>

                        <legend>Seus dados</legend>

                        <label for="nome">
                            Nome completo
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            minlength="3"
                            maxlength="100"
                            required
                        >

                        <br><br>

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            maxlength="100"
                            required
                        >

                        <br><br>

                        <label for="data_nascimento">
                            Data de nascimento
                        </label>

                        <input
                            type="date"
                            id="data_nascimento"
                            name="data_nascimento"
                            required
                        >

                        <br><br>

                        <label for="cpf">
                            CPF
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            maxlength="14"
                            placeholder="000.000.000-00"
                            required
                        >

                        <br><br>

                        <label for="telefone">
                            Telefone
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            maxlength="15"
                            placeholder="(00) 00000-0000"
                            required
                        >

                        <br><br>

                        <label for="cep">
                            CEP
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxlength="9"
                            placeholder="00000-000"
                            required
                        >

                        <br><br>

                        <label for="endereco">
                            Endereço
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >

                        <br><br>

                        <label for="cidade">
                            Cidade
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >

                        <br><br>

                        <label for="estado">
                            Estado
                        </label>

                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            required
                        >

                        <br><br>

                        <button
                            type="submit"
                            class="botao"
                        >
                            Cadastrar-se
                        </button>

                    </fieldset>

                </form>

                <section id="cadastros">

                    <h2>Voluntários cadastrados</h2>

                    <div id="lista-voluntarios"></div>

                </section>

            </section>
        `;

        configurarFormulario();
        renderizarVoluntarios();

        return;
    }


    // Página inicial

    conteudo.innerHTML = `
        <section id="sobre" class="destaque">

            <h2>Sobre a ONG</h2>

            <p>
                A Conecta Futuro é uma ONG fictícia que busca
                promover inclusão digital e educação tecnológica
                para a comunidade.
            </p>

            <img
                src="../../img/Voluntarios.png"
                alt="Voluntários da Conecta Futuro ensinando informática"
            >

            <div class="badges">
                <span class="badge">
                    Inclusão Digital
                </span>

                <span class="badge">
                    Educação
                </span>

                <span class="badge">
                    Voluntariado
                </span>
            </div>

        </section>

        <section id="contato">

            <h2>Entre em Contato</h2>

            <p>
                E-mail: contato@conectafuturo.org
            </p>

            <p>
                Telefone: (43) 99999-0000
            </p>

            <div class="alert">

                <strong>Informação:</strong>

                Nossa equipe está disponível para receber
                dúvidas e novos voluntários.

            </div>

        </section>

        <section id="voluntario">

            <h2>Seja um voluntário</h2>

            <p>
                Para se tornar um voluntário, você pode preencher
                nosso formulário de inscrição.
            </p>

            <button
                id="btn-formulario"
                class="botao"
            >
                Ir para o formulário
            </button>

        </section>
    `;

    configurarBotoes();

}


function configurarBotoes() {

    const btnFormulario =
        document.getElementById("btn-formulario");

    if (btnFormulario) {

        btnFormulario.addEventListener(
            "click",
            function () {

                navegarPara(
                    "../formulario/formulario.html"
                );

            }
        );
    }


    const btnSobre =
        document.getElementById("btn-sobre");

    if (btnSobre) {

        btnSobre.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const sobre =
                    document.getElementById("sobre");

                if (sobre) {

                    sobre.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );
    }


    const btnContato =
        document.getElementById("btn-contato");

    if (btnContato) {

        btnContato.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const contato =
                    document.getElementById("contato");

                if (contato) {

                    contato.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );
    }
}


export function configurarEventos() {

    document.addEventListener(
        "click",
        function (event) {

            const link =
                event.target.closest("a");

            if (!link) {
                return;
            }

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }

            if (
                href.includes("projeto.html") ||
                href.includes("formulario.html") ||
                href.includes("index.html")
            ) {

                event.preventDefault();

                navegarPara(href);

            }

        }
    );


    window.addEventListener(
        "popstate",
        function () {

            navegarPara(
                window.location.pathname,
                false
            );

        }
    );
}
