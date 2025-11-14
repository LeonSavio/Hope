document.getElementById("Check").onclick = function() {
  // Pega os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  // Obtém o valor do parâmetro "Page"
  const Page = params.get("Page");

  // Verifica o valor e redireciona
  if (Page === "elliesshard") {
    window.location.href = "61.html";
  }
};
