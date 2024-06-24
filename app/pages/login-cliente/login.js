jQuery(function ($) {
    const loginForm = $('#loginForm');

    loginForm.on('submit', function (event) {
        event.preventDefault();

        const email = $('#email').val();
        const senha = $('#senha').val();

        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        const usuario = cadastros.find(cadastro => cadastro.email === email && cadastro.senha === senha);

        if (usuario) {
            alert('Login realizado com sucesso!');
            window.location.href = '/app/index.html';
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    });
});