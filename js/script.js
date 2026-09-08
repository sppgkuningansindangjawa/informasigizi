/* =========================================================
   SCRIPT.JS
   SPPG KUNINGAN CIBINGBIN SINDANGJAWA

   Fungsi:
   * Navigasi halaman
   * Animasi section informasi gizi
   * Animasi angka kandungan gizi
   * Animasi progress bar
   * Animasi logo BGN saat halaman di-refresh

   Catatan:
   * Tidak membaca menu.js
   * Tidak menggunakan menuData
   * Data gizi diambil langsung dari HTML
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
       NAVIGASI KE INFORMASI GIZI
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
       ANIMASI INFORMASI GIZI
       
       Animasi berjalan ketika bagian gizi
       mulai terlihat di layar.
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
       ANIMASI ANGKA KANDUNGAN GIZI
       
       Angka dibaca langsung dari HTML.
       
       Contoh:
       
       <span id="smallProteinValue">23,6</span>
       
       Akan dianimasikan:
       
       0 → 23,6
    ===================================================== */

    function animateNutritionNumbers() {

        /* ==============================
           PORSI KECIL
        ============================== */

        animateNumber(
            "smallProteinValue",
            1000
        );

        animateNumber(
            "smallFatValue",
            1000
        );

        animateNumber(
            "smallCarbohydrateValue",
            1200
        );

        animateNumber(
            "smallFiberValue",
            800
        );


        /* ==============================
           PORSI BESAR
        ============================== */

        animateNumber(
            "largeProteinValue",
            1000
        );

        animateNumber(
            "largeFatValue",
            1000
        );

        animateNumber(
            "largeCarbohydrateValue",
            1200
        );

        animateNumber(
            "largeFiberValue",
            800
        );

    }


    /* =====================================================
       ANIMASI SATU ANGKA
       
       Nilai target diambil dari text HTML.
    ===================================================== */

    function animateNumber(
        elementId,
        duration
    ) {

        const element =
            document.getElementById(
                elementId
            );


        if (!element) {
            return;
        }


        /* Ambil angka dari HTML */

        const originalValue =
            element.textContent.trim();


        /* Ubah koma menjadi titik */

        const numericTarget =
            parseFloat(
                originalValue
                    .replace(",", ".")
            );


        /* Jika bukan angka */

        if (
            isNaN(numericTarget)
        ) {

            return;

        }


        /* Mulai dari 0 */

        const startValue = 0;

        const startTime =
            performance.now();


        function update(
            currentTime
        ) {

            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /* Ease Out */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                startValue +
                (
                    numericTarget -
                    startValue
                ) *
                eased;


            element.textContent =
                formatNumber(value);


            if (
                progress < 1
            ) {

                requestAnimationFrame(
                    update
                );

            } else {

                /* Pastikan nilai akhir
                   sama persis dengan HTML */

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
       
       23.6  → 23,6
       20.15 → 20,15
       25    → 25
    ===================================================== */

    function formatNumber(
        value
    ) {

        return value
            .toFixed(2)
            .replace(/\.?0+$/, "")
            .replace(".", ",");

    }


    /* =====================================================
       HOME
       
       Kembali ke bagian paling atas.
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

