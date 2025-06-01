(function ($) {
    "use strict";

    $(document).ready(function () {
        var exYuLang = ['sr', 'hr', 'bs'];
        if (exYuLang.includes(navigator.language)) {
            $("[lang='en']").hide(1);
            $("header div.col-sm-9").append($("<h1></h1>").text("Dobrodošli na sajt"), $("<p></p>").text("Na ovom sajt možete saznati mnogo dodatnih informacija o meni"));
            //$("h1#welcome").text("Dobrodošli na sajt");
            //$("p#subtext").text("Na ovom sajt možete saznati mnogo dodatnih informacija o meni");
            $("div.col-sm-1 > span").addClass("fi fi-rs float-right m-1 border border-warning");
            $("i.fa-home ~ span").text("Početna");
            $("i.fa-gift ~ span").text("Rođendanski poklon");
            $("i.fa-film ~ span").text("Omiljeni film");
            $("i.fa-city ~ span").text("Omiljeni grad");
            $("i.fa-wrench ~ span").text("Hobi");
            $("i.fa-images ~ span").text("Galerija");
            $("i.fa-gamepad ~ span").text("Kviz");
            $("i.fa-sitemap ~ span").text("Mapa sajta");
            $("input#FirstName").val("Srđan");
            $("input#LastName").val("Balešević");
            $("textarea#ShortBio").text("Rođeni Dobojlija. U rodnom gradu završio osnovu, srednju elektro školu (posjeduje dvije diplome iz srednje) i Saobraćajni fakultet u Doboju - smjer Logistika.\n\nOd svoje 10. godine (možda čak i ranije) pokazivao afinitete prema infomaciono-komunikacionim tehnologijama.\n\nOd 2007. se amaterski bavi pravljenjem web-sajtova (prvo u Simple Machines Forum-u, pa u WordPress-u, da bi kasnije prešao na Joomla-u).\n\n U periodu avgust - oktobar 2014. učestvovao u takmičenju m:tel AppBuilder Liga, gdje je osvojio 3. mjesto u kategoriji 'Edukacija i društvena odgovornost'.\n\nOd februara 2012. ponosni ujak jednom preslatkom djevojčurku.");
            $("footer > div:eq(1)").prepend($("<h3></h3>").attr("id", "owner").addClass("font-italic").text("Balešević Srđan"));
        } else {
            $("[lang='sr']").hide(1);
            $("header div.col-sm-9").append($("<h1></h1>").text("Welcome to the website"), $("<p></p>").text("A lot of additional information can be found about me on this website"));
            $("div.col-sm-1 > span").addClass("fi fi-gb-eng float-right m-1 border border-warning");
            $("i.fa-home ~ span").text("Home");
            $("i.fa-gift ~ span").text("Birthday present");
            $("i.fa-film ~ span").text("Favourite movie");
            $("i.fa-city ~ span").text("Favourite town");
            $("i.fa-wrench ~ span").text("Hobby");
            $("i.fa-images ~ span").text("Gallery");
            $("i.fa-gamepad ~ span").text("Quiz");
            $("i.fa-sitemap ~ span").text("Site Map");
            $("i.fa-sitemap ~ span").text("Mapa sajta");
            $("input#FirstName").val("Srdjan");
            $("input#LastName").val("Baleshevich");
            $("textarea#ShortBio").text("Born and raised in Doboj. In his hometown, he completed primary school education, secondary electrical school education (from there he has two secondary school diplomas) and is a Member of Alumni organisation of Faculty of Transport and Traffic Engineering in Doboj.\n\nSince the age of 10 (maybe even earlier) he showed an affinities for information & communication technologies.\n\nSince 2007, he's been building websites as an amateur (first in Simple Machines Forum, then in WordPress, and later switched to Joomla).\n\nIn the time period from August to October 2014, he participated in the m:tel AppBuilder League competition, where he won 3rd place in the category 'Education and social responsibility'.\n\nProud uncle to an adorable girl since the February of 2012.");
            $("footer > div:eq(1)").prepend($("<h3></h3>").attr("id", "owner").addClass("font-italic").text("Baleshevich Srdjan"));
        }
        switch (location.pathname) {
            case "/birthdaypresent.html":
            case "/favmovie.html":
            case "/favtown.html":
            case "/hobby.html":
            case "/gallery.html":
            case "/quiz.html":
                $("head").prepend($("<meta>").attr({ "name": "google-site-verification", "content": "HcgjQ9u13iaWAG1FyF9yFp6-f9QYrwstKoKPNrRbbqM" }), $("<meta>").attr({ "name": "google-site-verification", "content": "YXXACXsZjuu041kl41yKLww4xdiiudN1S0IEtdEeGSE" }), $("<meta>").attr({ "name": "msvalidate.01", "content": "6605C60582C09EBF05D19C7AA9FF5496" }), $("<meta>").attr({ "name": "msvalidate.01", "content": "78FE17549C9303A86665F2ECA50117F0" }), $("<meta>").attr({ "name": "wot-verification", "content": "cee6cf583ee362cd666b" }), $("<meta>").attr({ "name": "norton-safeweb-site-verification", "content": "AE1KUNZ8BFEIRXCIVRMN7804CZR-WK4ER0C3CPJO8W9N0ZVGHX9R2BJ4RNAG2DCL6SBHR6U7BDTD9VH3JKZG3FLO1EGE5E3CVLLQO4E1FM13PDFWE0RX9GUQ8SJWKLEW" }), $("<meta>").attr({ "name": "siteguarding-tools", "content": "f7a27dcd3b94ff4d3cd7d37eaecff01a" }), $("<title></title>").text(".::" + $("footer h3").text() + ":: - ::" + $("a[href='" + location.pathname.slice(1) + "'] > span").text() + "::."));
            //$("head").prepend("<meta http-equiv='Content-Security-Policy' content='default-src https:'>");
            //$("a.nav-link[href='" + location.pathname.slice(1) + "']").addClass("active");
        }
        $("head").each(function () {
            $(this).append($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b269%40gmail.com" }), $("<meta>").attr({ "name": "designer", "content": "BaleshSrle" }), $("<meta>").attr({ "name": "reply-to", "content": "srdjan.balesevic%40yahoo.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "pages.github.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "fediverse:creator", "content": "@baleshsrle@vivaldi.net" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
            $(this).append($("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "ie=edge" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
            $(this).append($("<link>").attr({ "rel": "dns-prefetch", "href": "https://cdn.jsdelivr.net/" }), $("<link>").attr({ "rel": "preconnect", "href": "https://cdn.jsdelivr.net/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "icon", "href": "images/logo.png" })/*, $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css", "crossorigin": "anonymous" })*/, $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css", "crossorigin": "anonymous" }),/* $("<script></script>").attr({ "src": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/js/bootstrap.bundle.min.js", "crossorigin": "anonymous" }),*/ $.getScript("https://kit.fontawesome.com/5aafa1a155.js"), $.getScript("https://static.mywot.com/website_owners_badges/websiteOwnersBadge.js"));
            $(this).children("[src$='jquery.min.js'],[src$='bootstrap.bundle.min.js'],[src$='jquery.typewriter.min.js'],[src$='jquery.countdown.min.js'],[src$='5aafa1a155.js']").attr("crossorigin", "anonymous");
        });
        $("meta:last").after($("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css", "crossorigin": "anonymous" }));
        $("body").addClass("d-flex flex-column h-100");
        $("main").addClass("flex-shrink-0 mb-3 pb-5");
        $("header").each(function () {
            $(this).find("div.col-sm-2").addClass("order-1 order-md-0").append($("<img>").attr({ "src": "images/logo.png", "alt": "Moj logo" }).addClass("mx-auto d-block img-fluid"));
            $(this).find("div.col-sm-9").addClass("py-md-4 order-2 order-md-1");
            $(this).find("div.col-sm-1").addClass("order-0 order-md-2");
        });
        $("header, footer").addClass("jumbotron jumbotron-fluid mb-0 py-0 overflow-hidden");
        $("nav.navbar").each(function () {
            $(this).addClass("navbar-expand-md navbar-dark bg-primary");
            $(this).children("button").addClass("navbar-toggler").attr({ "type": "button", "data-toggle": "collapse", "data-target": "#collapsibleNavbar" });
            $(this).children("div").addClass("collapse navbar-collapse").attr("id", "collapsibleNavbar");
        });
        $("li.nav-item").each(function () {
            //$("li.nav-item").eq(0).html("<a href='index.html' class='nav-link'><i class='fa-solid fa-home fa-lg pr-2'></i><span></span></a>");
            $(this).children("a").addClass("nav-link");
            $(this).find("i").addClass("fa-solid fa-lg pr-2");
        })
        $("div[class*='container']").addClass("mb-5 mb-md-0 pt-2 pb-5 pd-sm-0 pb-md-2 mx-auto");
        $("div.alert").addClass("alert-info alert-dismissible fade show mx-auto").attr("role", "alert").prepend($("<button></button>").addClass("close").attr({ "type": "button", "data-dismiss": "alert", "aria-label": "Close" }).html("<span aria-hidden='true'>&times;</span>"));
        $("img").each(function () {
            $("img").filter("[src*='simpleicons'],[src*='simple-icons']").width(32).height(32);
            $("img").filter("[alt='Facebook'],[alt='Instagram'],[alt^='X']").parent("a").attr("rel", "me");
            $("img[src*='gallery']").addClass("d-block w-100 h-auto rounded-lg");
            $("img.img-thumbnail").width(250).addClass("rounded-lg");
        });
        $("div.btn-group,td").children("a").addClass("btn btn-link").attr("role", "button");

        $("div.card").addClass("shadow-sm");
        $("ul.nav.nav-tabs[id$='List']").each(function () {
            $(this).parent("div.card-header").addClass("pt-1 px-3");
            $(this).addClass("d-flex flex-nowrap text-nowrap").css({ "overflow-x": "auto", "overflow-y": "hidden" }).attr("role", "tablist");
            $(this).find("a").on("click", function (e) {
                e.preventDefault()
                $(this).tab("show");
            }).attr("role", "tab");
        });
        $("input#DoB").val("1988-09-07");
        $("input#eMail").val("srdjan.baleshevich@engineer.com")
        $("a[href^='skype']").addClass("disabled d-none");
        $("a[href^='https']").not(".wotbadge").attr("target", "_blank");
        $("#lenovoThinkPadX230_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/lenovothinkpadx230-434-detail");
        $("#fujitsuLifeBookS752_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fsc-lifebook-s752-detail");
        $("#fujitsuLifeBookS761_link").attr("href", "https://mediamarket.rs.ba/index.php/laptopi/koristeni-laptopi/fujitsulifebooks761-detail");
        $("iframe").addClass("embed-responsive-item border-0 rounded-lg").attr("allowfullscreen", true).wrap($("<div></div>").addClass("embed-responsive embed-responsive-16by9"));
        $("table.table").wrap($("<div></div>").addClass("table-responsive"));
        $("table.table").addClass("m-auto");
        $("p.card-text").addClass("text-justify");
        $("div").filter("#BookReadCarousel,#carouselGallery").carousel({
            interval: 3500,
            keyboard: false,
            pause: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade");
        $("div#BookReadCarousel img").width(280).addClass("d-block mx-auto h-auto rounded-lg");
        $("div").filter("#BookReadCarousel,#carouselGallery").find("img").wrap($("<div></div>").addClass("carousel-item"));
        $("div.carousel-item").wrapAll($("<div></div>").addClass("carousel-inner"));
        $("div.carousel-item").first().addClass("active");
        $("div.carousel img").each(function () {
            $("div.carousel img").eq(0).attr("loading", "eager");
            $("div.carousel img").slice(1).attr("loading", "lazy");
        });
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
            return location.reload();
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
            location.reload();
        }).attr("type", "reset").addClass("btn btn-secondary");
        $("footer").addClass("d-sm-flex justify-content-around align-items-center bg-primary mt-auto fixed-bottom");
        //$("footer").children("div").eq(0).addClass("d-flex flex-wrap flex-sm-column mx-md-2");
        $("footer > div:eq(0)").addClass("d-flex justify-content-center flex-wrap mx-auto").css("max-width", "292px").append($("<div></div>").addClass("mr-1").append($("<img>").attr({ "src": "https://img.shields.io/github/v/release/twbs/bootstrap?filter=v4.*&logo=bootstrap&logoColor=white&label=Bootstrap&labelColor=7952b3&color=7952b3", "alt": "Bootstrap" })), $("<div></div>").append($("<img>").attr({ "src": "https://img.shields.io/github/v/release/jquery/jquery?filter=3.*&logo=jquery&logoColor=white&label=jQuery&labelColor=0769ad&color=0769ad", "alt": "jQuery" })), $("<div></div>").addClass("mr-1").append($("<img>").attr({ "src": "https://img.shields.io/github/v/release/fortawesome/font-awesome?filter=6.*&logo=fontawesome&logoColor=white&logoSize=auto&label=Font%20Awesome&labelColor=538dd7&color=538dd7", "alt": "Font Awesome" })), $("<div></div>").append($("<img>").attr({ "src": "https://img.shields.io/website?url=https%3A%2F%2Fcdn.jsdelivr.net%2F&logo=jsdelivr&logoColor=white&label=jsDelivr%20CDN&labelColor=e84d3d&cacheSeconds=600", "alt": "jsDelivr CDN" })));
        $("footer > div:eq(1)").addClass("flex-grow-1 text-center text-white").append($("<div></div>").html(new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + "."));
        $("footer > div:eq(2)").addClass("mx-md-2").append($("<a></a>").attr({ "id": "wot-badge0", "href": "https://www.mywot.com/scorecard/baleshsrle.github.io?wot_badge=0_white", "hreflang": "en-US", "target": "_blank" }).addClass("wot-badge mx-auto mb-1 mb-md-0").append($("<div></div>").addClass("wot-logo"), $("<div></div>").addClass("wot-shield"), $("<p></p>").addClass("wot-secured").text("Verified Website"), $("<div></div>").addClass("wot-vertical"), $("<p></p>").addClass("wot-report").text("See Report")));
        document.normalize();
    });
})(jQuery);
