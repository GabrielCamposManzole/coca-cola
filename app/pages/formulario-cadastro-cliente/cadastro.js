
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const limparBtn = document.getElementById('limparBtn');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.classList.add('was-validated');

        if (form.checkValidity() && validarSenha()) {
            const dados = {
                razaoSocial: document.getElementById('razaoSocial').value,
                cnpj: document.getElementById('cnpj').value,
                endereco: document.getElementById('endereco').value,
                numero: document.getElementById('meuInputNumber').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('email').value,
                senha: document.getElementById('senha').value,
                confirmacaoSenha: document.getElementById('confirmacaoSenha').value,
                dataNascimento: document.getElementById('dataNascimento').value
            };

            let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
            cadastros.push(dados);
            localStorage.setItem('cadastros', JSON.stringify(cadastros));

            alert('Dados cadastrados com sucesso!');
            form.reset();
            resultDiv.innerHTML = ''; // Limpar resultado anterior, se houver
        }
    });

    limparBtn.addEventListener('click', function () {
        form.reset();
        localStorage.removeItem('cadastros');
        resultDiv.innerHTML = '';
        form.classList.remove('was-validated');
    });

    function validarSenha() {
        const senha = document.getElementById('senha').value;
        const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

        if (senha !== confirmacaoSenha) {
            // Exibir mensagem de erro e marcar campos como inválidos
            document.getElementById('senha').setCustomValidity('As senhas não correspondem.');
            document.getElementById('confirmacaoSenha').setCustomValidity('As senhas não correspondem.');
            return false;
        } else {
            // Resetar validação personalizada
            document.getElementById('senha').setCustomValidity('');
            document.getElementById('confirmacaoSenha').setCustomValidity('');
            return true;
        }
    }
});