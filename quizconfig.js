function provjeraOdgovora(){
    var odgovor1 = document.forms[0].pitanje1.value;
    var odgovor2 = document.forms[0].pitanje2.value;
	var odgovor3 = document.forms[0].pitanje3.value;
	var odgovor4 = document.forms[0].pitanje4.value;
	var odgovor5 = document.forms[0].pitanje5.value;

    var brojTacnihOdgovora = 0;
    if (odgovor1 == "BP") {
        brojTacnihOdgovora++;
    }
    if (odgovor2 == "Dvije") {
        brojTacnihOdgovora++;
    }
    if (odgovor3 == "Bilo koji") {
        brojTacnihOdgovora++;
	}
	if (odgovor4 == "Trece") {
        brojTacnihOdgovora++;
	}
	if (odgovor5 == "1999") {
        brojTacnihOdgovora++;
    }
    document.getElementById("rezultat").innerHTML = "Broj tacnih odgovora: " + brojTacnihOdgovora;
	document.getElementById("rezultat").className="alert alert-info w-50 text-center mt-2";
}