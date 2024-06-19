/* class Usuario {
    constructor(razaoSocial, cnpj, endereco, telefone, senha) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefone = telefone;
        this.senha = senha;
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const razaoSocial = document.getElementById('razaoSocial').value;
    const cnpj = document.getElementById('cnpj').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;


    const usuario = new Usuario(razaoSocial, cnpj, endereco, telefone, senha);

    document.getElementById('result').innerHTML = `
        <h3>Dados do Usuário</h3>
        <p><strong>Razão Social:</strong> ${usuario.razaoSocial}</p>
        <p><strong>CNPJ:</strong> ${usuario.cnpj}</p>
        <p><strong>Endereço:</strong> ${usuario.endereco}</p>
        <p><strong>Telefone:</strong> ${usuario.telefone}</p>
        <p><strong>Senha:</strong> ${usuario.senha}</p>
        
    `;
});
 */
/* document.getElementById('limparBtn').addEventListener('click', function () {
    document.getElementById('cadastroForm').reset();
    document.getElementById('result').innerHTML = '';
}); */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const limparBtn = document.getElementById('limparBtn');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
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
        } else {
            form.classList.add('was-validated');
        }
    });

    limparBtn.addEventListener('click', function() {
        form.reset();
        localStorage.removeItem('cadastros');
        resultDiv.innerHTML = '';
        form.classList.remove('was-validated');
    });

    // Carregar e exibir dados ao carregar a página
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    if (cadastros.length > 0) {
        cadastros.forEach(dados => {
            resultDiv.innerHTML += `
                <p><strong>Razão Social:</strong> ${dados.razaoSocial}</p>
                <p><strong>CNPJ:</strong> ${dados.cnpj}</p>
                <p><strong>Endereço:</strong> ${dados.endereco}</p>
                <p><strong>Número:</strong> ${dados.numero}</p>
                <p><strong>Telefone:</strong> ${dados.telefone}</p>
                <p><strong>Email:</strong> ${dados.email}</p>
                <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento}</p>
                <hr>
            `;
        });
    } else {
        resultDiv.innerHTML = '<p>Nenhum dado cadastrado encontrado.</p>';
    }
});



