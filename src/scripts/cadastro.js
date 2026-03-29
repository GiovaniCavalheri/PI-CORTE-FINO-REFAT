document
  .querySelector(".form-cadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var cpf = document.getElementById("cpf").value;
    var dataNasc = document.getElementById("nascimento").value;

    var dataN = new Date(dataNasc);
    var dataAtual = new Date();
    var idade = dataN.getFullYear() - dataAtual.getFullYear();

    const regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const regexCPF = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;

    if (!regexEmail.test(email)) {
      alert("Email inválido");
      return;
    }

    if (!regexSenha.test(senha)) {
      alert("Senha fraca");
      return;
    }

    if (!dataNasc || idade < 18) {
      alert("Não é permitido usuários menores que 18 anos");
      return;
    }

    if (!regexCPF.test(cpf)) {
      alert("CPF inválido");
      return;
    }

    window.location.href = "/index.html";
  });
