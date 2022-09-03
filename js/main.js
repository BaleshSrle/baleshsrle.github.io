$("html").attr("lang", navigator.language);
$("head").append("<link rel='icon' href='images/logo.png' type='image/png'>");
$("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css'crossorigin='anonymous'>");
$("#datum").text(new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + ".");

function mqResults() {
    var a = $('#odgovor').val();

    if (a == "akcioni horor") {
        $("#rezultat").text("Odgovor je tačan.");
        $("#rezultat").addClass(" alert alert-success w-75 text-center mt-2");
    } else {
        $("#rezultat").html("Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDB-u).");
        $("#rezultat").addClass(" alert alert-danger w-75 text-center mt-2");
    }

}

function provjeraOdgovora() {
    const form = document.forms[0];
    var b = form.pitanje1.value;
    var c = form.pitanje2.value;
    var d = form.pitanje3.value;
    var e = form.pitanje4.value;
    var f = form.pitanje5.value;
    var g = form.pitanje6.value;
    var correct = 0;
    var incorrect = 0;

    if (b != "BGD") {
        correct++
    } else {
        incorrect++
    }
    if (c == "Dvije") {
        correct++
    } else {
        incorrect++
    }
    if (d == "Bilo koji") {
        correct++
    } else {
        incorrect++
    }
    if (e == "Trece") {
        correct++
    } else {
        incorrect++
    }
    if (f == "1999") {
        correct++
    } else {
        incorrect++
    }
    if (g == "Tri") {
        correct++
    } else {
        incorrect++
    }

    $("#rezultat").html("Broj tačnih odgovora: " + correct + ", broj pogrešnih odgovora: " + incorrect + ".");
    $("#rezultat").addClass(" alert alert-info w-50 text-center mt-2 mx-auto");
}
