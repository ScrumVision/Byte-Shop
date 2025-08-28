if (!localStorage.getItem("token")) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "assets/html/signin.html";
} else {
  try {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    const logado = document.querySelector("#logado");

    if (userLogado && typeof userLogado === "object") {
      const nome = userLogado.nome || "";
      logado.innerHTML = `Olá${nome ? `, ${nome}` : ""}`;
    } else {
      logado.innerHTML = "Olá";
    }
  } catch (error) {
    console.error("Erro ao carregar dados do usuário:", error);
    alert("Erro ao carregar informações. Faça login novamente.");
    window.location.href = "assets/html/signin.html";
  }
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "assets/html/signin.html";
}
