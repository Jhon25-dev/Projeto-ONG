const CHAVE_VOLUNTARIOS = "voluntarios";


export function obterVoluntarios() {

    const dados =
        localStorage.getItem(CHAVE_VOLUNTARIOS);

    if (!dados) {
        return [];
    }

    try {

        return JSON.parse(dados);

    } catch (erro) {

        console.error(
            "Erro ao recuperar voluntários:",
            erro
        );

        return [];
    }
}


export function salvarVoluntarios(voluntarios) {

    localStorage.setItem(
        CHAVE_VOLUNTARIOS,
        JSON.stringify(voluntarios)
    );
}
