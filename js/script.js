/* =========================================================
SCRIPT.JS
SPPG KUNINGAN CIBINGBIN SINDANGJAWA

Fungsi:

* Navigasi halaman
* Membaca data dari menu.js
* Menampilkan data menu
* Menampilkan gizi porsi kecil & besar
* Animasi angka gizi
  ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   ELEMENT
===================================================== */

const nutritionNav =
    document.getElementById("nutritionNav");

const nutritionSection =
    document.getElementById("nutrition");

const homeNav =
    document.getElementById("homeNav");


/* =====================================================
   TANGGAL HARI INI
===================================================== */

const today = new Date();

const day =
    String(today.getDate()).padStart(2, "0");

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const year =
    today.getFullYear();

const todayKey =
    day + month + year;





/* =====================================================
   FUNGSI SET TEXT
===================================================== */

function setText(
    elementId,
    value
) {

    const element =
        document.getElementById(elementId);

    if (
        element &&
        value !== undefined
    ) {

        element.textContent =
            value;

    }

}



/* =====================================================
   FUNGSI PROGRESS BAR
===================================================== */

function setProgress(
    elementId,
    value
) {

    const element =
        document.getElementById(elementId);

    if (
        element &&
        value !== undefined
    ) {

        element.style.width =
            value + "%";

    }

}



/* =====================================================
   SCROLL KE INFORMASI GIZI
===================================================== */

if (
    nutritionNav &&
    nutritionSection
) {

    nutritionNav.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            nutritionSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}



/* =====================================================
   ANIMASI SAAT INFORMASI GIZI MUNCUL
===================================================== */

if (nutritionSection) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            nutritionSection.classList.add(
                                "show"
                            );

                            animateNutritionNumbers();

                            observer.unobserve(
                                nutritionSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.20
            }
        );


    observer.observe(
        nutritionSection
    );

}



/* =====================================================
   ANIMASI ANGKA GIZI
===================================================== */

function animateNutritionNumbers() {


    if (
        typeof menuData === "undefined" ||
        !menuData[todayKey]
    ) {
        return;
    }


    const data =
        menuData[todayKey];


    /* ===============================================
       PORSI KECIL
    =============================================== */

    if (data.kecil) {

        animateNumber(
            "smallProteinValue",
            data.kecil.protein,
            1000
        );

        animateNumber(
            "smallFatValue",
            data.kecil.lemak,
            1000
        );

        animateNumber(
            "smallCarbohydrateValue",
            data.kecil.karbohidrat,
            1200
        );

        animateNumber(
            "smallFiberValue",
            data.kecil.serat,
            800
        );

    }



    /* ===============================================
       PORSI BESAR
    =============================================== */

    if (data.besar) {

        animateNumber(
            "largeProteinValue",
            data.besar.protein,
            1000
        );

        animateNumber(
            "largeFatValue",
            data.besar.lemak,
            1000
        );

        animateNumber(
            "largeCarbohydrateValue",
            data.besar.karbohidrat,
            1200
        );

        animateNumber(
            "largeFiberValue",
            data.besar.serat,
            800
        );

    }

}



/* =====================================================
   ANIMASI SATU ANGKA
===================================================== */

function animateNumber(
    elementId,
    target,
    duration
) {

    const element =
        document.getElementById(elementId);


    if (
        !element ||
        target === undefined
    ) {
        return;
    }


    const numericTarget =
        parseFloat(
            String(target)
                .replace(",", ".")
        );


    if (
        isNaN(numericTarget)
    ) {

        element.textContent =
            target;

        return;

    }


    const startTime =
        performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /* Ease Out */

        const eased =
            1 - Math.pow(
                1 - progress,
                3
            );


        const value =
            numericTarget * eased;


        element.textContent =
            formatNumber(value);


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                formatNumber(
                    numericTarget
                );

        }

    }


    requestAnimationFrame(
        update
    );

}



/* =====================================================
   FORMAT ANGKA
   Contoh:
   23.6 -> 23,6
   20.15 -> 20,15
===================================================== */

function formatNumber(value) {

    return value
        .toFixed(2)
        .replace(/\.?0+$/, "")
        .replace(".", ",");

}



/* =====================================================
   HOME
===================================================== */

if (homeNav) {

    homeNav.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


});
