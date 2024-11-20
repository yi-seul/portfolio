jQuery(document).ready(function () {
    /*더블클릭되는 변수*/
    let clickD = true;

    /*스크롤 내릴 때 fixed 되도록*/
    $(window).scroll(function () {
        $(window).scroll(function () {
            let nowScorll = $(document).scrollTop();

            $(document).scrollTop();

            if (nowScorll > 0) {
                $("#headerWrap").css({ position: "fixed", left: "0", top: "0", backgroundColor: "#fff" });
                $("#logoArea a img").attr("src", "img/logoB.svg");
                $("#navArea .allMenu a span").css({ backgroundColor: "#000" });
                $("#navArea .gnb li, #navArea .gnb li a, #infoMenu .servicesArea li a").css({
                    color: "#000",
                });
                $("#infoMenu .iconArea .login img").css({ marginLeft: "-64px" });
                $("#infoMenu .iconArea .search img").css({ marginLeft: "-95px" });
            } else {
                $("#headerWrap").css({
                    position: "absolute",
                    left: "0",
                    top: "0",
                    backgroundColor: "rgba(0,0,0,0)",
                });
                $("#logoArea a img").attr("src", "img/logo.svg");
                $("#navArea .allMenu a span").css({ backgroundColor: "#fff" });
                $("#navArea .gnb li, #navArea .gnb li a, #infoMenu .servicesArea li a").css({
                    color: "#fff",
                });
                $("#infoMenu .iconArea .login img").css({ marginLeft: "2px", marginTop: "1px" });
                $("#infoMenu .iconArea .search img").css({ marginLeft: "-30px" });
            }
        });
    });

    /*hearder 색상, 로고 변경*/
    $("#navArea .allMenu, #navArea .gnb li:not(:last), #infoMenu .servicesArea .service").click(function () {
        if (clickD == true) {
            $("#headerWrap").css({ height: "1100px", backgroundColor: "#fff" });
            $("#logoArea a img").attr("src", "img/logoB.svg");
            $("#navArea .allMenu a span").css({ backgroundColor: "#000" });
            $("#navArea .gnb li, #navArea .gnb li a, #infoMenu .servicesArea li a").css({
                color: "#000",
            });
            $("#infoMenu .iconArea .login img").css({ marginLeft: "-64px" });
            $("#infoMenu .iconArea .search img").css({ marginLeft: "-95px" });
        } else {
            $("#headerWrap").css({ height: "142px", backgroundColor: "rgba(0,0,0,0)" });
            $("#logoArea a img").attr("src", "img/logo.svg");
            $("#navArea .allMenu a span").css({ backgroundColor: "#fff" });
            $("#navArea .gnb li, #navArea .gnb li a, #infoMenu .servicesArea li a").css({
                color: "#fff",
            });
            $("#infoMenu .iconArea .login img").css({ marginLeft: "2px", marginTop: "1px" });
            $("#infoMenu .iconArea .search img").css({ marginLeft: "-30px" });
        }
    });

    /*header / menuArea*/
    $("#menuArea").hide();

    $(".allMenu").click(function () {
        if (clickD == true) {
            $("#menuArea").show();
            clickD = false;
            $("#menuArea").on("scroll touchmove mousewheel", function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $("#menuArea").hide();
            clickD = true;
        }
    });

    /*header / watch_list*/
    $(".watch_list").hide();

    $("#navArea .gnb .watches").click(function () {
        if (clickD == true) {
            $(".watch_list").show();
            clickD = false;
            $(".watch_list").on("scroll touchmove mousewheel", function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $(".watch_list").hide();
            clickD = true;
            // $(".watch_list").off("scroll touchmove mousewheel");
        }
    });

    $(".watch_list .list .slideArea .btnArea .nextBtn").click(function () {
        $(".watch_list .list .slideArea ul").animate({ marginLeft: "-=360px" }, 500, "linear");
    });

    $(".watch_list .list .slideArea .btnArea .prevBtn").click(function () {
        $(".watch_list .list .slideArea ul").animate({ marginLeft: "+=360px" }, 500, "linear");
    });

    /*header / our_list*/
    $("#our_list").hide();

    $("#navArea .gnb .world").click(function () {
        if (clickD == true) {
            $("#our_list").show();
            clickD = false;
            $("#our_list").on("scroll touchmove mousewheel", function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $("#our_list").hide();
            clickD = true;
        }
    });

    $("#our_list .list .btnArea .nextBtn").click(function () {
        $("#our_list .list .slideArea ul").animate({ marginLeft: "-=480px" }, 500, "linear");
    });
    $("#our_list .list .btnArea .prevBtn").click(function () {
        $("#our_list .list .slideArea ul").animate({ marginLeft: "+=480px" }, 500, "linear");
    });

    /*header / service_list*/
    $("#service_list").hide();

    $("#infoMenu .servicesArea li:first").click(function () {
        if (clickD == true) {
            $("#service_list").show();
            clickD = false;
            $("#service_list").on("scroll touchmove mousewheel", function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        } else {
            $("#service_list").hide();
            clickD = true;
        }
    });

    $("#service_list .list .btnArea .nextBtn").click(function () {
        $("#service_list .list .slideArea ul").animate({ marginLeft: "-480px" }, 500, "linear");
    });
    $("#service_list .list .btnArea .prevBtn").click(function () {
        $("#service_list .list .slideArea ul").animate({ marginLeft: "0" }, 500, "linear");
    });

    /*container*/

    /*latestArea*/
    // $("#latestArea").mouseover(function () {
    //     $("#latest_inn h3").css({ opacity: "1" });
    //     $("#latest_inn .slideArea").css({ opacity: "1", transform: "translatex(0)" });
    // });

    // $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
    // $("#latest_inn .slideArea ul").css({ marginLeft: "-480px" });

    $("#latest_inn .slideArea .btnArea .nextBtn").click(function () {
        $("#latest_inn .slideArea ul")
            .stop()
            .animate({ marginLeft: "-=480px" }, 500, "linear", function () {
                $("#latest_inn .slideArea ul").append($("#latest_inn .slideArea ul li:eq(0)"));
                $("#latest_inn .slideArea ul").css({ marginLeft: "-480px" });
            });
    });

    $("#latest_inn .slideArea .btnArea .prevBtn").click(function () {
        $("#latest_inn .slideArea ul")
            .stop()
            .animate({ marginLeft: "+=480px" }, 500, "linear", function () {
                $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
                $("#latest_inn .slideArea ul").css({ marginLeft: "-480px" });
            });
    });

    /*artArea*/
    $("#artArea").mouseover(function () {
        $("#art_inn .textArea h3,#art_inn .textArea .text,#art_inn .textArea .more").css({
            transform: "translatey(0)",
            opacity: "1",
        });
    });

    /*musicArea*/
    // $("#musicArea").mouseover(function () {
    //     $("#music_inn .imgArea").css({ transform: "scale(1)", opacity: "1" });
    // });

    /*atelierArea*/
    $("#atelierArea").mouseover(function () {
        $("#atelier_inn .textArea h3, #atelier_inn .textArea .text, #atelier_inn .textArea .more").css({
            transform: "translatey(0)",
            opacity: "1",
        });
    });

    /*collectionArea*/
    $("#collectionArea").mouseover(function () {
        $("#collect_inn h3").css({ opacity: "1" });
        $("#collect_inn .slideArea").css({ transform: "translatex(0)", opacity: "1" });
    });

    $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
    $("#collect_inn .slideArea ul").css({ marginLeft: "-480px" });

    $("#collect_inn .slideArea .btnArea .nextBtn").click(function () {
        $("#collect_inn .slideArea ul")
            .stop()
            .animate({ marginLeft: "-=480px" }, 500, "linear", function () {
                $("#collect_inn .slideArea ul").append($("#collect_inn .slideArea ul li:eq(0)"));
                $("#collect_inn .slideArea ul").css({ marginLeft: "-480px" });
            });
    });

    $("#collect_inn .slideArea .btnArea .prevBtn").click(function () {
        $("#collect_inn .slideArea ul")
            .stop()
            .animate({ marginLeft: "+=480px" }, 500, "linear", function () {
                $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
                $("#collect_inn .slideArea ul").css({ marginLeft: "-480px" });
            });
    });

    /*mob_footer*/
    jQuery("#mob_footer .mob_footer_top .footerNav dd").css({ display: "none" });

    jQuery("#mob_footer .mob_footer_top .footerNav dt").click(function () {
        jQuery("#mob_footer .mob_footer_top .footerNav dl").css({ height: "100px" });
        jQuery("#mob_footer .mob_footer_top .footerNav dd").slideUp(300, "linear");
        jQuery(this).parent().css({ height: "180px" });
        jQuery(this).siblings().toggle(500, "linear");
    });

    /*반응형*/
    $(window).resize(function () {
        bodyW = $("body").width();

        if (bodyW >= 320 && bodyW <= 480) {
            $("#headerWrap").css({ height: "100px" });

            $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
            $("#latest_inn .slideArea ul").css({ marginLeft: "-280px" });

            $("#latest_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=280px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").append($("#latest_inn .slideArea ul li:eq(0)"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-280px" });
                    });
            });

            $("#latest_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=280px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-280px" });
                    });
            });

            $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
            $("#collect_inn .slideArea ul").css({ marginLeft: "-280px" });

            $("#collect_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=280px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").append($("#collect_inn .slideArea ul li:eq(0)"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-280px" });
                    });
            });

            $("#collect_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=280px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-280px" });
                    });
            });
        } else if (bodyW >= 481 && bodyW <= 767) {
            $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
            $("#latest_inn .slideArea ul").css({ marginLeft: "-440px" });

            $("#latest_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=440px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").append($("#latest_inn .slideArea ul li:eq(0)"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-440px" });
                    });
            });

            $("#latest_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=440px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-440px" });
                    });
            });

            $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
            $("#collect_inn .slideArea ul").css({ marginLeft: "-440px" });

            $("#collect_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=440px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").append($("#collect_inn .slideArea ul li:eq(0)"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-440px" });
                    });
            });

            $("#collect_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=440px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-440px" });
                    });
            });
        } else if (bodyW >= 768 && bodyW <= 1024) {
            $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
            $("#latest_inn .slideArea ul").css({ marginLeft: "-370px" });

            $("#latest_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=370px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").append($("#latest_inn .slideArea ul li:eq(0)"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-370px" });
                    });
            });

            $("#latest_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#latest_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=370px" }, 500, "linear", function () {
                        $("#latest_inn .slideArea ul").prepend($("#latest_inn .slideArea ul li:last"));
                        $("#latest_inn .slideArea ul").css({ marginLeft: "-370px" });
                    });
            });

            $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
            $("#collect_inn .slideArea ul").css({ marginLeft: "-370px" });

            $("#collect_inn .slideArea .btnArea .nextBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "-=370px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").append($("#collect_inn .slideArea ul li:eq(0)"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-370px" });
                    });
            });

            $("#collect_inn .slideArea .btnArea .prevBtn").click(function () {
                $("#collect_inn .slideArea ul")
                    .stop()
                    .animate({ marginLeft: "+=370px" }, 500, "linear", function () {
                        $("#collect_inn .slideArea ul").prepend($("#collect_inn .slideArea ul li:last"));
                        $("#collect_inn .slideArea ul").css({ marginLeft: "-370px" });
                    });
            });

            $("#craft_inn ul li").hide();
            $("#craft_inn ul li:eq(0),#craft_inn ul li:eq(1),#craft_inn ul li:eq(2)").show();
        }
    });
});
