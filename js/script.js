/* =========================================================
   SCROLL KE INFORMASI GIZI
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const nutritionNav = document.getElementById("nutritionNav");
    const nutritionSection = document.getElementById("nutrition");
    const homeNav = document.getElementById("homeNav");

    if (nutritionNav && nutritionSection) {

        nutritionNav.addEventListener("click", function (e) {

            e.preventDefault();

            nutritionSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* =====================================================
       ANIMASI SAAT KANDUNGAN GIZI MUNCUL
       ===================================================== */

    if (nutritionSection) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        nutritionSection.classList.add("show");

                        animateNutritionNumbers();

                        observer.unobserve(
                            nutritionSection
                        );

                    }

                });

            },
            {
                threshold: 0.20
            }
        );

        observer.observe(nutritionSection);

    }


    /* =====================================================
       ANIMASI ANGKA
       ===================================================== */

    function animateNutritionNumbers() {

        animateNumber(
            "proteinValue",
            18,
            1000
        );

        animateNumber(
            "fatValue",
            16,
            1000
        );

        animateNumber(
            "carbohydrateValue",
            6,
            1200
        );

        animateNumber(
            "fiberValue",
            6,
            800
        );

        animateNumber(
            "sugarValue",
            12,
            900
        );

        animateNumber(
            "sodiumValue",
            450,
            1300
        );

    }


    function animateNumber(
        elementId,
        target,
        duration
    ) {

        const element =
            document.getElementById(elementId);

        if (!element) return;

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

            /* Efek ease-out */
            const eased =
                1 - Math.pow(
                    1 - progress,
                    3
                );

            const value =
                Math.round(
                    target * eased
                );

            element.textContent = value;

            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                element.textContent = target;

            }

        }

        requestAnimationFrame(update);

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