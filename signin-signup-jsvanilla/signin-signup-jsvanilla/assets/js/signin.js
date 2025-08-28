// Mostra/oculta a senha ao clicar no ícone
let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');
  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

// Função para login
function entrar() {
  let usuario = document.getElementById('usuario');
  let userLabel = document.getElementById('userLabel');
  let senha = document.getElementById('senha');
  let senhaLabel = document.getElementById('senhaLabel');
  let msgError = document.getElementById('msgError');

  // Garante que listaUser seja um array, mesmo se não existir no localStorage
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  // Verifica se usuário e senha correspondem
  let userValid = listaUser.find(user =>
    user.userCad === usuario.value && user.senhaCad === senha.value
  );

  if (userValid) {
    // Login bem-sucedido
    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify({
      nome: userValid.nomeCad,
      user: userValid.userCad,
      senha: userValid.senhaCad
    }));

    window.location.href = '../../index.html';
 // Ajuste o caminho conforme a estrutura real
  } else {
    // Login inválido - feedback visual
    userLabel.style.color = 'red';
    usuario.style.borderColor = 'red';
    senhaLabel.style.color = 'red';
    senha.style.borderColor = 'red';
    msgError.style.display = 'block';
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
}
