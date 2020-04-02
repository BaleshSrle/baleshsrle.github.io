document.getElementById("fontawesome").href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";

function mqResults() {
    var odgovor = document.getElementById('odgovor').value;

    if (odgovor == "akcioni horor") {
        document.getElementById("rezultat").innerHTML = "Odgovor je tačan.";
        document.getElementById("rezultat").className = "alert alert-success w-75 text-center mt-2";
    } else {
        document.getElementById("rezultat").innerHTML = "Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDB-u).";
        document.getElementById("rezultat").className = "alert alert-danger w-75 text-center mt-2";
    }
}

function provjeraOdgovora() {
    var odgovor1 = document.forms[0].pitanje1.value;
    var odgovor2 = document.forms[0].pitanje2.value;
    var odgovor3 = document.forms[0].pitanje3.value;
    var odgovor4 = document.forms[0].pitanje4.value;
    var odgovor5 = document.forms[0].pitanje5.value;

    var brojTacnihOdgovora = 0;
    var brojNetacnihOdgovora = 0;
    if (odgovor1 == "BP") {
        brojTacnihOdgovora++;
    } else {
        brojNetacnihOdgovora++;
    }
    if (odgovor2 == "Dvije") {
        brojTacnihOdgovora++;
    } else {
        brojNetacnihOdgovora++;
    }
    if (odgovor3 == "Bilo koji") {
        brojTacnihOdgovora++;
    } else {
        brojNetacnihOdgovora++;
    }
    if (odgovor4 == "Trece") {
        brojTacnihOdgovora++;
    } else {
        brojNetacnihOdgovora++;
    }
    if (odgovor5 == "1999") {
        brojTacnihOdgovora++;
    } else {
        brojNetacnihOdgovora++;
    }
    document.getElementById("rezultat").innerHTML = "Broj tačnih odgovora: " + brojTacnihOdgovora + " , broj pogrešnih odgovora: " + brojNetacnihOdgovora + '.';
    document.getElementById("rezultat").className = "alert alert-info w-50 text-center mt-2";
}