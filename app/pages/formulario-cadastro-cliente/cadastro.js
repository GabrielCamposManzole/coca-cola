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

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput.value.length !== 14) {
        cnpjInput.setCustomValidity("CNPJ deve ter exatamente 14 dígitos.");
        isValid = false;
    } else {
        cnpjInput.setCustomValidity("");
    }

    if (this.checkValidity() === false || !isValid) {
        event.stopPropagation();
    } else {
        const formData = new FormData(this);
        let result = '';
        formData.forEach((value, key) => {
            result += `${key}: ${value}<br>`;
        });
        document.getElementById('result').innerHTML = result;
    }
    this.classList.add('was-validated');
});

document.getElementById('limparBtn').addEventListener('click', function () {
    document.getElementById('cadastroForm').reset();
    document.getElementById('cadastroForm').classList.remove('was-validated');
    document.getElementById('result').innerHTML = '';
});



const input = document.getElementById('meuInputNumber ');

input.addEventListener('input', function () {
    // Calcula a largura com base na quantidade de caracteres
    const length = input.value.length;
    input.style.width = (length + 1) + 'ch';
});