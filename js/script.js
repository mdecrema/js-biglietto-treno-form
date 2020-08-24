var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

btnGenera.addEventListener("click", function() {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var eta = document.getElementById("eta").value;
  var passeggero = document.getElementById("passeggero");
  var offerta = document.getElementById("offerta");
  var carrozza = document.getElementById("carrozza");
  var numeroCarrozza = Math.floor(Math.random() * 10) + 1;
  var codice = document.getElementById("codice");
  var codiceCp = Math.floor(Math.random() * 10000) + 90000;
  var costo = document.getElementById("costo");
  var biglietto_container = document.getElementById("bigl_cont");
  var dett_h3 = document.getElementById("dett_h3");

  var prezzoKm = 0.21;
  var totale = km * prezzoKm;

if (!isNaN(km) && km!="" && nome!="" && isNaN(nome)) {
  if (eta == 0) {
    var sconto = ((totale * 20) / 100);
    totale = totale - sconto;
    offerta.innerHTML = "Sconto Minorenne";
  } else if (eta == 1) {
    totale = totale * 1;
    offerta.innerHTML = "Biglietto Standard";
  } else if (eta == 2 ){
    var sconto = ((totale * 40) / 100);
    totale = totale - sconto;
    offerta.innerHTML = "Sconto Over-65";
  }
  totale = totale.toFixed(2);

  biglietto_container.style.display = "block";
  dett_h3.style.display = "block";
  passeggero.innerHTML = nome;
  carrozza.innerHTML = numeroCarrozza;
  codice.innerHTML = codiceCp;
  costo.innerHTML = "€ "+totale;
} else {
  alert("Controlla i campi inseriti e riprova");
  biglietto_container.style.display = "none";
  dett_h3.style.display = "none";
}
});

btnAnnulla.addEventListener("click", function() {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var eta = document.getElementById("eta").value;
  var biglietto_container = document.getElementById("bigl_cont");
  var dett_h3 = document.getElementById("dett_h3");

  biglietto_container.style.display = "none";
  dett_h3.style.display = "none";
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("eta").value = 0;
});
