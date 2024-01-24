$(document).ready(function () {
    $("html").attr("lang", navigator.language);
    $("head").append("<link rel='dns-prefetch' href='https://cdn.jsdelivr.net/'>");
    $("head").append("<link rel='preconnect' href='https://cdn.jsdelivr.net/'>");
    $("head").append("<link rel='icon' href='images/logo.png' type='image/png'>");
    $("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css'crossorigin='anonymous'>");
    $("body").addClass("d-flex flex-column h-100");
    $("main").addClass("flex-shrink-0 mb-3 pb-5");
    $("header.jumbotron.jumbotron-fluid").addClass("mb-0 py-0 overflow-hidden");
    $("div.col-sm-10").addClass("py-md-4");
    $("i.fa-home,i.fa-gift,i.fa-film,i.fa-city,i.fa-wrench,i.fa-images,i.fa-gamepad,i.fa-sitemap").addClass("pr-2");
    $("div[class*='container']").addClass("py-2 mx-auto");
    $("img[src*='simpleicons']").width(32).height(32);
    $("div.card").addClass("shadow");
    $("#lenovoThinkPadX230_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/lenovothinkpadx230-434-detail");
    $("#fujitsuLifeBookS752_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fsc-lifebook-s752-detail");
    $("#fujitsuLifeBookS761_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fujitsulifebooks761-detail");
    $("iframe.embed-responsive-item").addClass("border-0 rounded-lg").attr("allowfullscreen", "true");
    $("img.img-thumbnail").width(250);
    $("[src*='laguna'],[src*='delfi'],[src*='carobnaknjiga'],[src*='samizdatb92'],[src*='cdnmpro'],[alt$='Romanovima']").width(280).addClass("h-auto");
    $(".carousel").addClass("carousel-fade").carousel({
        interval: 3500,
        keyboard: false,
        pause: false,
        touch: false
    });
    $("img[src*='slika']").addClass("d-block w-100 h-auto rounded-lg");
    $("footer").addClass("container-fluid bg-primary text-center text-white mt-auto mb-0 py-0 overflow-hidden fixed-bottom");
    $("#datum").text(new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + ".");
});

function mqResults() {
    var a = $('#odgovor').val();

    if (a == "akcioni horor") {
        $("#rezultat").text("Odgovor je tačan.").addClass("alert alert-success w-75 text-center mt-2");
    } else {
        $("#rezultat").html("Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDb-u).").addClass("alert alert-danger w-75 text-center mt-2");
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