jQuery(document).ready(function () {
    /** header **/
    $(window).on("scroll", function () {
        if (openSection) {
            // 메뉴가 열려있으면 헤더는 흰색 유지
            applyScrolledStyle();
        } else {
            if ($(this).scrollTop() > 50) {
                applyScrolledStyle();
            } else {
                applyDefaultStyle();
            }
        }
    });

    function applyScrolledStyle() {
        $("#headerWrap").css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            zIndex: 1000,
        });
        $(
            "#navArea .gnb li, #navArea .gnb li a, #navArea .allMenu, #navArea .allMenu a, #infoMenu .servicesArea li a"
        ).css({ color: "#000" });
        $("#navArea .allMenu a span").css({ backgroundColor: "#000" });
        $("#logoArea a img").attr("src", "img/logoB.svg");
        $("#infoMenu .iconArea .login img").css({ marginLeft: "-64px" });
        $("#infoMenu .iconArea .search img").css({ marginLeft: "-95px" });
    }
    function applyDefaultStyle() {
        $("#headerWrap").css({
            position: "absolute", // 원래 상태로 복귀
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "transparent",
            zIndex: "",
        });
        $(
            "#navArea .gnb li, #navArea .gnb li a, #navArea .allMenu, #navArea .allMenu a, #infoMenu .servicesArea li a"
        ).css({ color: "#fff" });
        $("#navArea .allMenu a span").css({ backgroundColor: "#fff" });
        $("#logoArea a img").attr("src", "img/logo.svg");
        $("#infoMenu .iconArea .login img").css({ marginLeft: "2px", marginTop: "1px" });
        $("#infoMenu .iconArea .search img").css({ marginLeft: "-30px" });
    }

    // 현재 열려있는 메뉴 섹션을 저장하는 변수 (아무것도 안열려있으면 null)
    let openSection = null;

    // 메뉴 모두 닫는 함수
    function closeAll() {
        $("#menuArea, .watch_list, #our_list, #service_list")
            .hide()
            .off("scroll touchmove mousewheel", preventScroll)
            .css({ backgroundColor: "" });
        openSection = null;
        updateHeaderStyle();
    }

    // 메뉴 토글 함수
    function toggleMenu(section, selector) {
        if (openSection === section) {
            closeAll();
        } else {
            closeAll();
            openSection = section;
            $(selector).css({ backgroundColor: "#fff" }).show().on("scroll touchmove mousewheel", preventScroll);
            updateHeaderStyle();
        }
    }

    // 헤더 스타일 업데이트 함수
    function updateHeaderStyle() {
        if (openSection) {
            applyScrolledStyle(); // 메뉴 열렸을 땐 무조건 흰색 유지
        } else {
            if ($(window).scrollTop() > 50) {
                applyScrolledStyle();
            } else {
                applyDefaultStyle();
            }
        }
    }

    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    $(".allMenu").click(function (e) {
        e.preventDefault();
        toggleMenu("menu", "#menuArea");
    });

    $(".watches").click(function (e) {
        e.preventDefault();
        toggleMenu("watch", ".watch_list");
    });

    $(".world").click(function (e) {
        e.preventDefault();
        toggleMenu("world", "#our_list");
    });

    $(".service").click(function (e) {
        e.preventDefault();
        toggleMenu("service", "#service_list");
    });

    /** container **/

    // 공통 슬라이더 초기화 함수
    function initSlider(containerSelector, slideWidth) {
        const $ul = $(containerSelector + " .slideArea ul");
        const $next = $(containerSelector + " .slideArea .btnArea .nextBtn");
        const $prev = $(containerSelector + " .slideArea .btnArea .prevBtn");

        // 초기 위치 세팅
        $ul.prepend($ul.find("li:last"));
        $ul.css({ marginLeft: -slideWidth + "px" });

        // 다음 버튼 클릭
        $next.on("click", function () {
            $ul.stop().animate({ marginLeft: "-=" + slideWidth + "px" }, 500, "linear", function () {
                $ul.append($ul.find("li:eq(0)"));
                $ul.css({ marginLeft: -slideWidth + "px" });
            });
        });

        // 이전 버튼 클릭
        $prev.on("click", function () {
            $ul.stop().animate({ marginLeft: "+=" + slideWidth + "px" }, 500, "linear", function () {
                $ul.prepend($ul.find("li:last"));
                $ul.css({ marginLeft: -slideWidth + "px" });
            });
        });
    }

    // 슬라이더 초기화
    initSlider("#latest_inn", 480);
    initSlider("#collect_inn", 480);
    initSlider(".watch_list", 350);
    initSlider("#our_list", 470);
    initSlider("#service_list", 470);

    // artArea hover 효과
    $("#artArea").on("mouseover", function () {
        $("#art_inn .textArea h3, #art_inn .textArea .text, #art_inn .textArea .more").css({
            transform: "translateY(0)",
            opacity: "1",
        });
    });

    // atelierArea hover 효과
    $("#atelierArea").on("mouseover", function () {
        $("#atelier_inn .textArea h3, #atelier_inn .textArea .text, #atelier_inn .textArea .more").css({
            transform: "translateY(0)",
            opacity: "1",
        });
    });

    // collectionArea hover 효과
    $("#collectionArea").on("mouseover", function () {
        $("#collect_inn h3").css({ opacity: "1" });
        $("#collect_inn .slideArea").css({ transform: "translateX(0)", opacity: "1" });
    });

    /** mob_footer **/
    // 초기 설정: dd 숨기기
    jQuery("#mob_footer .mob_footer_top .footerNav dd").css({ display: "none" });

    // dt 클릭 이벤트
    jQuery("#mob_footer .mob_footer_top .footerNav dt").on("click", function () {
        const $dl = jQuery("#mob_footer .mob_footer_top .footerNav dl");
        const $allDd = jQuery("#mob_footer .mob_footer_top .footerNav dd");
        const $clickedDl = jQuery(this).parent();
        const $siblingsDd = jQuery(this).siblings("dd");

        // 전체 닫기
        $dl.css({ height: "100px" });
        $allDd.slideUp(300, "linear");

        // 클릭한 항목 열기
        $clickedDl.css({ height: "180px" });
        $siblingsDd.toggle(500, "linear");
    });

    /** 반응형 **/
    function initSlider(containerSelector, slideWidth) {
        const $ul = $(`${containerSelector} .slideArea ul`);
        const $nextBtn = $(`${containerSelector} .slideArea .btnArea .nextBtn`);
        const $prevBtn = $(`${containerSelector} .slideArea .btnArea .prevBtn`);

        // 초기화
        $ul.prepend($ul.find("li:last"));
        $ul.css({ marginLeft: -slideWidth + "px" });

        // 기존 이벤트 제거 후 재등록 (중복 방지)
        $nextBtn.off("click").on("click", function () {
            $ul.stop().animate({ marginLeft: `-=${slideWidth}px` }, 500, "linear", function () {
                $ul.append($ul.find("li:eq(0)"));
                $ul.css({ marginLeft: -slideWidth + "px" });
            });
        });

        $prevBtn.off("click").on("click", function () {
            $ul.stop().animate({ marginLeft: `+=${slideWidth}px` }, 500, "linear", function () {
                $ul.prepend($ul.find("li:last"));
                $ul.css({ marginLeft: -slideWidth + "px" });
            });
        });
    }

    function updateLayout() {
        const bodyW = $("body").width();

        if (bodyW >= 320 && bodyW <= 480) {
            $("#headerWrap").css({ height: "100px" });
            initSlider("#latest_inn", 280);
            initSlider("#collect_inn", 280);
        } else if (bodyW >= 481 && bodyW <= 767) {
            initSlider("#latest_inn", 440);
            initSlider("#collect_inn", 440);
        } else if (bodyW >= 768 && bodyW <= 1024) {
            initSlider("#latest_inn", 370);
            initSlider("#collect_inn", 370);

            // craft 영역 처리
            $("#craft_inn ul li").hide();
            $("#craft_inn ul li").slice(0, 3).show();
        }
    }

    // 최초 로딩 시 실행
    $(window).on("load resize", function () {
        updateLayout();
    });
});
