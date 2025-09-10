function aparecertextoh() {
  document.getElementById("formularioh").style.display = "block";
  document.getElementById("formulariom").style.display = "none"
}
function aparecertextom() {
  document.getElementById("formulariom").style.display = "block";
  document.getElementById("formularioh").style.display = "none";
}

function calcularBfH() {
  let alturah = parseFloat(document.getElementById("alturah").value);
  let alturahIn = alturah / 2.54;
  if (isNaN(alturah)){
    alert("Por favor, preencha a altura!");
    return; 
  }

  let cinturah = parseFloat(document.getElementById("cinturah").value);
  let cinturahIn = cinturah / 2.54;
  if (isNaN(cinturah)){
    alert("Por favor, preencha a medida da cintura!");
    return; 
  } 

  let pescocoh = parseFloat(document.getElementById("pescocoh").value);
  let pescocohIn = pescocoh / 2.54;
  if (isNaN(pescocoh)){
    alert("Por favor, preencha a medida do pescoço!");
    return; 
  } 

  let pesoh = parseFloat(document.getElementById("pesoh").value);
  if (isNaN(pesom)){
    alert("Por favor, preencha seu peso!");
    return; 
  }

  if ((pescocoh - cinturah) <= 0){
    alert("Valores incorretos");
    return; 
  }

  let formulabfh = 86.010 * Math.log10(cinturahIn - pescocohIn) - 70.041 * Math.log10(alturahIn) + 36.76;

  let formulaMassaGordah = ((formulabfh / 100) * pesoh);

  let formulaMassaMagrah = pesoh - formulaMassaGordah;

  document.getElementById("bf").innerHTML = formulabfh.toFixed(2) + " %";
  document.getElementById("mm").innerHTML = formulaMassaMagrah.toFixed(2) + " KG";
  document.getElementById("mg").innerHTML = formulaMassaGordah.toFixed(2) + " KG";
}

function calcularBfM() {
  let alturam = parseFloat(document.getElementById("alturam").value);
  let alturamIn = alturam / 2.54;
  if (isNaN(alturam)){
    alert("Por favor, preencha a altura!");
    return; 
  }
  

  let cinturam = parseFloat(document.getElementById("cinturam").value);
  let cinturamIn = cinturam / 2.54;
  if (isNaN(cinturam)){
    alert("Por favor, preencha a medida da cintura!");
    return; 
  } 

  let pescocom = parseFloat(document.getElementById("pescocom").value);
  let pescocomIn = pescocom / 2.54;
  if (isNaN(pescocom)){
    alert("Por favor, preencha a medida do pescoço!");
    return; 
  }

  let quadrilm = parseFloat(document.getElementById("quadrilm").value);
  let quadrilmIn = quadrilm / 2.54;
  if (isNaN(quadrilm)){
    alert("Por favor, preencha a medida do quadril!");
    return; 
  }

  let pesom = parseFloat(document.getElementById("pesom").value);
  if (isNaN(pesom)){
    alert("Por favor, preencha seu peso!");
    return; 
  }

  if ((cinturamIn + quadrilmIn - pescocomIn) <= 0){
     alert("Valores incorretos");
    return; 
  }

  let formulabfm = 163.205 * Math.log10(cinturamIn + quadrilmIn - pescocomIn) - 97.684 * Math.log10(alturamIn) - 78.387;
  let formulaMassaGordam = ((formulabfm / 100) * pesom);
  let formulaMassaMagram = pesom - formulaMassaGordam;
  document.getElementById("bf1").innerHTML = formulabfm.toFixed(2) + " %";
  document.getElementById("mm1").innerHTML = formulaMassaMagram.toFixed(2) + " KG";
  document.getElementById("mg1").innerHTML = formulaMassaGordam.toFixed(2) + " KG";
}