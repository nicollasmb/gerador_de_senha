const sliderEl = document.querySelector(".slider")
const buttonEl = document.querySelector(".button-gerar-senha")
const tamanhoSenha = document.querySelector("#valor")
const senha = document.querySelector(".senha")
const mostrarSenha = document.querySelector(".container-senha-hide")
const textCopiarSenha = document.querySelector(".copiar-senha")



let novaSenha = ""

tamanhoSenha.innerHTML = sliderEl.value;

sliderEl.oninput = function () {
  tamanhoSenha.innerHTML = this.value;
};


buttonEl.addEventListener("click", function () {
    const generatedPassword = gerarSenha(sliderEl.value);
    senha.textContent = generatedPassword;
    novaSenha = generatedPassword
    textCopiarSenha.innerHTML = " Clique na senha para copiar 👆"
});


senha.addEventListener("click", function() {
navigator.clipboard.writeText(novaSenha)
textCopiarSenha.innerHTML = "Senha Copiada com Sucesso!"

})








function gerarSenha(length) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        result += caracteres.charAt(randomIndex);

    }

    mostrarSenha.style.display = "block"


    return result;
}
