"use strict";
// Obtém o formulário do DOM
const form = document.querySelector('form');
// Função para validar o formulário
function validateForm(event) {
    event.preventDefault();
    // Captura os valores dos campos do formulário
    const formData = {
        nome: form.querySelector('#nome').value.trim(),
        idade: parseInt(form.querySelector('#idade').value, 10),
        email: form.querySelector('#email').value.trim(),
        telefone: form.querySelector('#telefone').value.trim(),
        experiencia: form.querySelector('#experiencia').value,
        tipo: Array.from(form.querySelectorAll('input[name="tipo"]:checked'))
            .map((input) => input.value),
        preferencia: form.querySelector('#preferencia').value.trim(),
        saude: form.querySelector('#saude').value.trim(),
        termo: form.querySelector('#termo').checked,
    };
    // Validação dos campos individuais
    if (formData.nome === '') {
        alert('Por favor, insira seu nome completo.');
        return;
    }
    if (isNaN(formData.idade) || formData.idade <= 0) {
        alert('Por favor, insira uma idade válida.');
        return;
    }
    if (!validateEmail(formData.email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    if (!formData.termo) {
        alert('Você deve aceitar os termos e condições.');
        return;
    }
    // Se todas as validações passarem, submete o formulário
    alert('Formulário válido! Enviando...');
    form.submit();
}
// Função auxiliar para validar o e-mail
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Adiciona um listener ao formulário para validar na submissão
form.addEventListener('submit', validateForm);
