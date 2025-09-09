function aparecertextoh() {
  document.getElementById("formularioh").style.display = "block";
  document.getElementById("formulariom").style.display = "none"
}
function aparecertextom() {
  document.getElementById("formulariom").style.display = "block";
  document.getElementById("formularioh").style.display = "none";
}

function calcularBfM() {
  let altura = parseFloat(document.getElementById("alturah").value);
  let alturaIn = altura / 2.54;
  let cintura = parseFloat(document.getElementById("cinturah").value);
  let cinturaIn = cintura / 2.54;
  let pescoco = parseFloat(document.getElementById("pescocoh").value);
  let pescocoIn = pescoco / 2.54;
  let peso = parseFloat(document.getElementById("pesoh").value);

  let formulabf = 86.010 * Math.log10(cinturaIn - pescocoIn) - 70.041 * Math.log10(alturaIn) + 36.76;
  let formulaMassaGorda = ((formulabf / 100) * peso);
  let formulaMassaMagra = peso - formulaMassaGorda;
    document.getElementById("bf").innerHTML = formulabf.toFixed(2) + "%";
  document.getElementById("mm").innerHTML = formulaMassaMagra.toFixed(2) + "KG"
  document.getElementById("mg").innerHTML = formulaMassaGorda.toFixed(2) + "KG"
}