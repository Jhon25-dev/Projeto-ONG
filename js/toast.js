export function mostrarToast(
    mensagem = "Ação realizada com sucesso!"
) {

    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = mensagem;

    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);
}
