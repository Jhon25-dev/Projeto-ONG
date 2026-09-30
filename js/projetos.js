export const projetos = [
    {
        titulo: "Aprender Digital",
        descricao: "Aulas de informática.",
        imagem: "../../img/aula-informatica.png",
        alt: "Aulas de informática"
    },
    {
        titulo: "Computador para Todos",
        descricao: "Recuperação e doação de computadores.",
        imagem: "../../img/recuperacao-doacao-computadores.png",
        alt: "Recuperação e doação de computadores"
    },
    {
        titulo: "Futuro em Código",
        descricao: "Atividade de programação para jovens.",
        imagem: "../../img/atividade-programacao-jovens.png",
        alt: "Atividade de programação para jovens"
    }
];

export function renderizarProjetos() {

    const lista = document.getElementById("lista-projetos");

    if (!lista) {
        return;
    }

    lista.innerHTML = projetos.map(function (projeto) {

        return `
            <article class="card">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.alt}"
                >

                <div class="card-conteudo">

                    <h3>${projeto.titulo}</h3>

                    <p>${projeto.descricao}</p>

                </div>

            </article>
        `;

    }).join("");
}
