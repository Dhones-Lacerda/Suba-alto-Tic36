// Obtém o formulário do DOM
const form = document.querySelector('form')!;

// Função para validar o formulário
function validateForm(event: Event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const formData = {
        nome: form.querySelector<HTMLInputElement>('#nome')!.value.trim(),
        idade: parseInt(form.querySelector<HTMLInputElement>('#idade')!.value, 10),
        email: form.querySelector<HTMLInputElement>('#email')!.value.trim(),
        telefone: form.querySelector<HTMLInputElement>('#telefone')!.value.trim(),
        experiencia: form.querySelector<HTMLSelectElement>('#experiencia')!.value,
        tipo: Array.from(form.querySelectorAll<HTMLInputElement>('input[name="tipo"]:checked'))
            .map((input: HTMLInputElement) => input.value),
        preferencia: form.querySelector<HTMLInputElement>('#preferencia')!.value.trim(),
        saude: form.querySelector<HTMLTextAreaElement>('#saude')!.value.trim(),
        termo: form.querySelector<HTMLInputElement>('#termo')!.checked,
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
function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Adiciona um listener ao formulário para validar na submissão
form.addEventListener('submit', validateForm);
