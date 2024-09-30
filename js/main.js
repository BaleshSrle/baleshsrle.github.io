$(document).ready(function () {
    //$("html").attr("lang", navigator.language);
    var BrowserLang = navigator.language;
    if (BrowserLang.includes("sr") || BrowserLang.includes("hr") || BrowserLang.includes("bs")) {
        $("[lang='sr']").show(1);
        $("[lang='en']").hide(1);
        $("li.nav-item").each(function () {
            $(this).eq(0).find("span").text("Početna");
            $(this).eq(1).find("span").text("Rođendanski poklon");
            $(this).eq(2).find("span").text("Omiljeni film");
            $(this).eq(3).find("span").text("Omiljeni grad");
            $(this).eq(4).find("span").text("Hobi");
            $(this).eq(5).find("span").text("Galerija");
            $(this).eq(6).find("span").text("Kviz");
            $(this).eq(7).find("span").text("Mapa sajta");
        });
    } else {
        $("[lang='en']").show(1);
        $("[lang='sr']").hide(1);
        $("li.nav-item").each(function () {
            $(this).eq(0).find("span").text("Home");
            $(this).eq(1).find("span").text("Birthday present");
            $(this).eq(2).find("span").text("Favourite movie");
            $(this).eq(3).find("span").text("Favourite town");
            $(this).eq(4).find("span").text("Hobby");
            $(this).eq(5).find("span").text("Gallery");
            $(this).eq(6).find("span").text("Quiz");
            $(this).eq(7).find("span").text("Site Map");
        });
    }
    switch (location.pathname) {
        case "/birthdaypresent.html":
        case "/favmovie.html":
        case "/favtown.html":
        case "/hobby.html":
        case "/gallery.html":
        case "/quiz.html":
            $("head").prepend("<meta name='google-site-verification' content='HcgjQ9u13iaWAG1FyF9yFp6-f9QYrwstKoKPNrRbbqM'>", "<meta name='google-site-verification' content='YXXACXsZjuu041kl41yKLww4xdiiudN1S0IEtdEeGSE'>", "<meta name='msvalidate.01' content='6605C60582C09EBF05D19C7AA9FF5496'>", "<meta name='msvalidate.01' content='78FE17549C9303A86665F2ECA50117F0'>", "<meta name='wot-verification' content='cee6cf583ee362cd666b'>", "<meta name='norton-safeweb-site-verification' content='AE1KUNZ8BFEIRXCIVRMN7804CZR-WK4ER0C3CPJO8W9N0ZVGHX9R2BJ4RNAG2DCL6SBHR6U7BDTD9VH3JKZG3FLO1EGE5E3CVLLQO4E1FM13PDFWE0RX9GUQ8SJWKLEW'>");
        //$("head").prepend("<meta http-equiv='Content-Security-Policy' content='default-src https:'>");
    }
    $("head").each(function () {
        $(this).append("<meta name='author' content='Baleševi&#263; Sr&#273;an, srdjan.b269%40gmail.com'>", "<meta name='designer' content='BaleshSrle'>", "<meta name='reply-to' content='srdjan.balesevic%40yahoo.com'>", "<meta name='language' content='sr'>", "<meta name='host' content='pages.github.com'>", "<meta name='geo.region' content='BA-SRP'>", "<meta name='geo.placename' content='Добој'>", "<meta name='twitter:creator' content='@BaleshSrle'>", "<meta name='twitter:site' content='@BaleshSrle'>");
        $(this).append("<meta name='MSThemeCompatible' content='yes'>", "<meta http-equiv='cleartype' content='on'>", "<meta http-equiv='X-UA-Compatible' content='ie=edge'>", "<meta http-equiv='x-dns-prefetch-control' content='on'>", "<meta http-equiv='Cache-control' content='no-cache'>", "<meta http-equiv='Pragma' content='no-cache'>", "<meta http-equiv='Expires' content='-1'>");
        $(this).append("<link rel='dns-prefetch' href='https://cdn.jsdelivr.net/'>", "<link rel='preconnect' href='https://cdn.jsdelivr.net/'>", "<link rel='icon' href='images/logo.png' type='image/png'>", "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css'>", "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css'>");
    });
    $("[rel~='preconnect'],[rel~='stylesheet'],[src$='jquery.min.js'],[src$='bootstrap.bundle.min.js'],[src$='jquery.typewriter.min.js'],[src$='jquery.countdown.min.js']").attr("crossorigin", "anonymous");
    $("body").addClass("d-flex flex-column h-100");
    $("main").addClass("flex-shrink-0 mb-3 pb-5");
    $("header").each(function () {
        $(this).filter(".jumbotron.jumbotron-fluid").addClass("mb-0 py-0 overflow-hidden");
        $(this).find("div.col-sm-2").eq(0).addClass("order-1 order-md-0");
        $(this).find("div.col-sm-9").addClass("py-md-4 order-2 order-md-1");
        $(this).find("div.col-sm-1").addClass("order-0 order-md-2");
    });
    $("span.fi").addClass("float-right m-1 border border-warning");
    $("li.nav-item").find("i").addClass("fa-lg pr-2");
    $("div[class*='container']").addClass("py-2 mx-auto");
    $("img[src*='simpleicons'],img[src*='simple-icons']").width(32).height(32);
    //$("td[colspan]").last().find("img").addClass("m-1").width(32).height(32);
    $("div.card").addClass("shadow-sm");
    $("ul.nav.nav-tabs").parent("div.card-header").addClass("pt-2");
    $("ul[id$='List']").find("a").on("click", function (e) {
        e.preventDefault()
        $(this).tab("show");
    }).attr("role", "tab");
    $("#lenovoThinkPadX230_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/lenovothinkpadx230-434-detail");
    $("#fujitsuLifeBookS752_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fsc-lifebook-s752-detail");
    $("#fujitsuLifeBookS761_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fujitsulifebooks761-detail");
    $("iframe.embed-responsive-item").addClass("border-0 rounded-lg").attr("allowfullscreen", "true");
    $("img.img-thumbnail").width(250).addClass("rounded-lg");
    $("p.card-text").addClass("text-justify");
    $("div#BookReadCarousel").find("img").width(280).addClass("d-block mx-auto h-auto rounded-lg");
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3500,
        keyboard: false,
        pause: false,
        ride: 'carousel',
        touch: false
    });
    $("div.carousel-item").first().addClass("active");
    $("div.carousel-item").children("img").first().attr("loading", "eager");
    $("div.carousel-item").children("img").slice(1).attr("loading", "lazy");
    $("img[src*='slika']").addClass("d-block w-100 h-auto rounded-lg");
    $("button#movieAnswerCheckBtn").on("click", function () {
        var a = $('#odgovor').val();

        if (a == "akcioni horor" || a == "action horror") {
            $("p#rezultat[lang='sr']").text("Odgovor je tačan.").addClass("alert alert-success mw-100 text-center mt-2");
            $("p#rezultat[lang='en']").text("The answer is correct.").addClass("alert alert-success mw-100 text-center mt-2");
        } else {
            $("p#rezultat[lang='sr']").html("Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDb-u).").addClass("alert alert-danger mw-100 text-center mt-2");
            $("p#rezultat[lang='en']").html("The answer is incorrect. <br> Type another answer (or search for the answer to the question on Wikipedia or IMDb).").addClass("alert alert-danger mw-100 text-center mt-2");
        }
    }).attr("type", "button").addClass("btn btn-primary");
    $("button#movieAnswerResetBtn").on("click", function () {
        $("p#rezultat.alert").alert("close");
    }).attr("type", "reset").addClass("btn btn-secondary");
    $("button#quizAnswerCheckBtn").on("click", function () {
        const form = document.forms[0];
        var b = form.pitanje1.value;
        var c = form.pitanje2.value;
        var d = form.pitanje3.value;
        var e = form.pitanje4.value;
        var f = form.pitanje5.value;
        var g = form.pitanje6.value;
        var h = form.pitanje7.value;
        var correct = 0;
        var incorrect = 0;

        if (b != "BGD") {
            $("div.card").eq(0).addClass("border-success");
            $("div.card-body").eq(0).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(0).addClass("border-danger");
            $("div.card-body").eq(0).addClass("text-danger");
            incorrect++
        }
        if (c == "Dvije") {
            $("div.card").eq(1).addClass("border-success");
            $("div.card-body").eq(1).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(1).addClass("border-danger");
            $("div.card-body").eq(1).addClass("text-danger");
            incorrect++
        }
        if (d == "Bilo koji") {
            $("div.card").eq(2).addClass("border-success");
            $("div.card-body").eq(2).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(2).addClass("border-danger");
            $("div.card-body").eq(2).addClass("text-danger");
            incorrect++
        }
        if (e == "Trece") {
            $("div.card").eq(3).addClass("border-success");
            $("div.card-body").eq(3).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(3).addClass("border-danger");
            $("div.card-body").eq(3).addClass("text-danger");
            incorrect++
        }
        if (f == "1999") {
            $("div.card").eq(4).addClass("border-success");
            $("div.card-body").eq(4).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(4).addClass("border-danger");
            $("div.card-body").eq(4).addClass("text-danger");
            incorrect++
        }
        if (g == "Tri") {
            $("div.card").eq(5).addClass("border-success");
            $("div.card-body").eq(5).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(5).addClass("border-danger");
            $("div.card-body").eq(5).addClass("text-danger");
            incorrect++
        }
        if (h != "VladaArsic") {
            $("div.card").eq(6).addClass("border-success");
            $("div.card-body").eq(6).addClass("text-success");
            correct++
        } else {
            $("div.card").eq(6).addClass("border-danger");
            $("div.card-body").eq(6).addClass("text-danger");
            incorrect++
        }

        $("#rezultat").attr("lang", "sr").html("Broj tačnih odgovora: " + correct + ", broj pogrešnih odgovora: " + incorrect + ".").addClass("alert alert-info w-50 text-center mt-2 mx-auto");
        $("#rezultat").attr("lang", "en").html("Number of currect answers: " + correct + ", number of wrong answers: " + incorrect + ".").addClass("alert alert-info w-50 text-center mt-2 mx-auto");

    }).attr("type", "button").addClass("btn btn-primary");
    $("button#resetQuiz").on("click", function () {
        $("div.card").removeClass("border-success border-danger");
        $("div.card-body").removeClass("text-success text-danger");
        $("p#rezultat.alert").alert("close");
    }).attr("type", "reset").addClass("btn btn-secondary");
    $("footer").addClass("container-fluid bg-primary text-center text-white mt-auto mb-0 py-0 overflow-hidden fixed-bottom");
    //$("footer").children("h3[lang='sr']").addClass("font-italic").text("Balešević Srđan");
    $("#datum").text(new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + ".");
});