
function results() {
    var odgovor = document.getElementById('odgovor').value;

    if (odgovor == "akcioni horor") {
        document.getElementById("rezultat").innerHTML = "Odgovor je tačan.";
        document.getElementById("rezultat").className = "alert alert-success w-75 text-center mt-2";
    } else {
        document.getElementById("rezultat").innerHTML = "Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDB-u).";
        document.getElementById("rezultat").className = "alert alert-danger w-75 text-center mt-2";
    }
}