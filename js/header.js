$(document).ready(function () {
    let clickD = true;

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
});
