jQuery(function ($) {
// Aplicar máscaras usando jQuery Mask Plugin
$('.cnpj-mask').mask('00.000.000/0000-00', { reverse: true });
$('.telefone-mask').mask('(00) 00000-0000');

    const form = $('#cadastroForm');
    const limparBtn = $('#limparBtn');
    const submitBtn = form.find('button[type="submit"]');
    const resultDiv = $('<div></div>').appendTo(form);

    const modal = $('#sucessoModal');
    const span = $('.close');

    function showModal() {
        modal.css('display', 'block');
    }

    span.on('click', function () {
        modal.css('display', 'none');
    });

    $(window).on('click', function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });

    function exibirDadosSalvos() {
        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        const resultDiv = $('#result');

        if (cadastros.length > 0) {
            resultDiv.empty();
            cadastros.forEach((dados, index) => {
                resultDiv.append(`
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
                `);
            });
        } else {
            resultDiv.html('<p>Nenhum dado cadastrado encontrado.</p>');
        }
    }

    exibirDadosSalvos();

    form.on('submit', function (event) {
        event.preventDefault();
        form.addClass('was-validated');

        if (form[0].checkValidity() && validarSenha()) {
            const dados = {
                razaoSocial: $('#razaoSocial').val(),
                cnpj: $('#cnpj').val(),
                endereco: $('#endereco').val(),
                numero: $('#numero').val(),
                telefone: $('#telefone').val(),
                email: $('#email').val(),
                senha: $('#senha').val(),
                confirmacaoSenha: $('#confirmacaoSenha').val(),
                dataNascimento: $('#dataNascimento').val(),
                genero: $('input[name="genero"]:checked').val() 
            };


            salvarDadosNoLocalStorage(dados);

            resultDiv.text('Dados cadastrados com sucesso!');

            form[0].reset();
            form.removeClass('was-validated');
            submitBtn.prop('disabled', true);

            showModal();

            exibirDadosSalvos();
        } else {
            resultDiv.text('');
        }
    });

    limparBtn.on('click', function () {
        form[0].reset();
        form.removeClass('was-validated');
        resultDiv.text('');
        submitBtn.prop('disabled', true);
    });

    const campos = form.find('input, select');
    campos.each(function () {
        $(this).on('blur', function () {
            validarCampos();
        });
    });

    function validarCampos() {
        let formValido = true;
        campos.each(function () {
            if (!this.checkValidity()) {
                formValido = false;
            }
        });
        if (validarSenha() && form[0].checkValidity()) {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
    }

    function validarSenha() {
        const senha = $('#senha');
        const confirmacaoSenha = $('#confirmacaoSenha');
        if (senha.val() !== confirmacaoSenha.val()) {
            confirmacaoSenha[0].setCustomValidity('As senhas não correspondem.');
            return false;
        } else {
            confirmacaoSenha[0].setCustomValidity('');
            return true;
        }
    }

    function salvarDadosNoLocalStorage(dados) {
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.push(dados);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
    }

    window.excluirCadastro = function (index) {
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.splice(index, 1);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        exibirDadosSalvos();
    };
});