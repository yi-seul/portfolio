window.onload = function () {
    /* header */

    // watch_list
    // function openCloseToc() {
    //     if (document.getElementById("toc-content").style.display === "block") {
    //         document.getElementById("toc-content").style.display = "none";
    //         document.getElementById("toc-toggle").textContent = "보이기";
    //     } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e.display = "block";
    //         document.getElementById("toc-toggle").textContent = "숨기기";
    //     }
    // }

    /* container */

    // latestArea
    const latestArea = document.querySelector("#latestArea");
    const latest_inn = document.querySelector("#latest_inn");
    const slideArea = latest_inn.lastElementChild;
    latestArea.addEventListener("mouseover", function () {
        latest_inn.firstElementChild.style.opacity = "1";
        slideArea.style.opacity = "1";
        slideArea.style.transform = "translatex(0)";
    });

    const slideArea_ul = slideArea.firstElementChild;
    const slideArea_li = slideArea_ul.lastElementChild;
    slideArea_ul.prepend(slideArea_li);
    slideArea_ul.style.marginLeft = "-480px";

    // musicArea
    const musicArea = document.querySelector("#musicArea");
    const music_inn = document.querySelector("#music_inn");
    musicArea.addEventListener("mouseover", function () {
        music_inn.firstElementChild.style.transform = "scale(1)";
        music_inn.firstElementChild.style.opacity = "1";
    });
};
