  document.getElementById("Check").onclick = function() {
  const Page =(window.location.search);

  // Verifica o valor e redireciona
  if (Page == "?elliesshard") {
    window.location.href = "#";
  }

  if (Page == "?outerakamado") {
      document.getElementById("Check").onclick = function() {
          window.location.href = "hereyougo.html"
  }
}
};
