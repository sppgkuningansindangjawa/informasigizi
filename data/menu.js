/*

# DATA MENU SPPG

Format tanggal:
DDMMYYYY

Contoh:
07 September 2026
= 07092026

Semua informasi menu dan gizi
dimasukkan di file ini.
*/

const menuData = {


/* =====================================================
   07 SEPTEMBER 2026
===================================================== */

"07092026": {

    tanggal: "07 September 2026",


    /* ===============================================
       PORSI KECIL
    =============================================== */

    kecil: {

        foto:
            "assets/images/menu/07092026-kecil.png",

        menu:
            "Nasi, Telur Rebus Goreng, Kol Rebus, Tahu Saus Padang, Anggur, Susu UHT",

        energi:
            591,

        protein:
            "20,150",

        lemak:
            "14,153",

        karbohidrat:
            "68,414",

        serat:
            "5,962",


        progress: {
           energi: 100,

            protein: 100,

            lemak: 100,

            karbohidrat: 100,

            serat: 100

        }

    },


    /* ===============================================
       PORSI BESAR
    =============================================== */

    besar: {

        foto:
            "assets/images/menu/07092026-besar.png",

        menu:
            "Nasi, Telur Rebus Goreng, Kol Rebus, Tahu Saus Padang, Anggur, Susu UHT",

        energi:
            650,

        protein:
            "24,500",

        lemak:
            "17,250",

        karbohidrat:
            "78,200",

        serat:
            "6,800",


        progress: {
           energi: 100,

            protein: 100,

            lemak: 100,

            karbohidrat: 100,

            serat: 100

        }

    }

},


/* =====================================================
   08 SEPTEMBER 2026
   CONTOH DATA HARI BERIKUTNYA
===================================================== */

"08092026": {

    tanggal: "08 September 2026",


    kecil: {

        foto:
            "assets/images/menu/07092026.png",

        menu:
            "Nasi, Ayam Pepes Kemangi, Capcay, Tempe Crispy, Buah Naga",

        energi:
            400,

        protein:
            "17,213",

        lemak:
            "14,077",

        karbohidrat:
            "55,966",

        serat:
            "4,222",


        progress: {

            protein: 48,

            lemak: 38,

            karbohidrat: 72,

            serat: 32

        }

    },


    besar: {

        foto:
            "assets/images/menu/07092026.png",

        menu:
            "Nasi, Ayam Pepes Kemangi, Capcay, Tempe Crispy, Buah Naga",

        energi:
            615,

        protein:
            "24,557",

        lemak:
            "16,342",

        karbohidrat:
            "78,980",

        serat:
            "5,156",


        progress: {

            protein: 60,

            lemak: 52,

            karbohidrat: 88,

            serat: 42

        }

    }

}


};
