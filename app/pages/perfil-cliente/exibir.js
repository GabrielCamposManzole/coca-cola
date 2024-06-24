document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('result');

    function carregarDados() {
        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        resultDiv.innerHTML = '';
        if (cadastros.length > 0) {
            cadastros.forEach((dados, index) => {
                resultDiv.innerHTML += `
    <div class="card mb-3">
        <div class="card-body">
            <p><strong>Razão Social:</strong> ${dados.razaoSocial}</p>
            <p><strong>CNPJ:</strong> ${dados.cnpj}</p>
            <p><strong>Endereço:</strong> ${dados.endereco}</p>
            <p><strong>Número:</strong> ${dados.numero}</p>
            <p><strong>Telefone:</strong> ${dados.telefone}</p>
            <p><strong>Email:</strong> ${dados.email}</p>
            <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento}</p>
            <p><strong>Gênero:</strong> ${dados.genero}</p>
            <button class="btn btn-danger" onclick="excluirCadastro(${index})">Excluir</button>
        </div>
    </div>
`;

            });
        } else {
            resultDiv.innerHTML = '<p>Nenhum dado cadastrado encontrado.</p>';
        }
    }

    window.excluirCadastro = function (index) {
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.splice(index, 1);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        carregarDados();
    }

    carregarDados();
});