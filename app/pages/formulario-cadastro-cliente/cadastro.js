class Usuario {
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

document.getElementById('limparBtn').addEventListener('click', function () {
    const inputs = document.querySelectorAll('#cadastroForm input');
    inputs.forEach(input => input.value = '');
});