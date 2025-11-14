document.getElementById("Check").onclick = function() { 
  var Page = window.location.search 
  alert(Page)

  if (Page == "?elliesshard"){ 
    window.location.href = '61.html' 
  } };