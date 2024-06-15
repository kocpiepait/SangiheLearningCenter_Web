<<<<<<< HEAD
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
=======
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
>>>>>>> 2a41908 (database seeder)

/** @type {import('tailwindcss').Config} */
export default {
    content: [
<<<<<<< HEAD
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    Viewport: {
        nm: 1486,
    },
    theme: {
        extend: {
            colors: {
                white: "#fff",
                darkslateblue: {
                    100: "#2b3f97",
                    300: "#002058",
                    500: "#392c7d",
                },
                black: "#000",
                gray: {
                    100: "#fcfcfc",
                    200: "#171a1f",
                    300: "#22100d",
                    400: "#fefeff",
                    600: "#fafafa",
                    700: "#212529",
                    1000: "#0a142f",
                    1100: "#0b0b0b",
                    1200: "rgba(0, 0, 0, 0)",
                },
                whitesmoke: {
                    100: "#f7f7f7",
                    200: "#ededed",
                    300: "#e9ecef",
                    400: "#f5f7f9",
                },
                firebrick: "#c12727",
                crimson: {
                    100: "#ff5364",
                    300: "#cf202f",
                    500: "#ff5363",
                },
                mistyrose: "#ffdeda",
                slategray: "#685f78",
                darkslategray: {
                    100: "#43474e",
                    200: "#39393b",
                    300: "#333",
                    400: "#263238",
                },
                darkgray: {
                    100: "#a5a5a5",
                    200: "#a2a2a2",
                },
                salmon: "#f66962",
                limegreen: "#2db742",
                seagreen: "#0c8b51",
                coral: "#ff875a",
                goldenrod: "#ffb54a",
                silver: {
                    100: "#c7c7c7",
                    200: "#c4c4c4",
                    300: "#bdc1ca",
                },
                gainsboro: {
                    300: "#e7e7e7",
                    400: "#dee1e6",
                },
                plum: "#b4a7f5",
                lightslategray: "#9095a1",
                royalblue: "#1564c0",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                nter: "Inter",
                "font-awesome-5-free": "'Font Awesome 5 Free'",
                "noto-sans": "'Noto Sans'",
                lexend: "Lexend",
                montserrat: "Montserrat",
                roboto: "Roboto",
                lato: "Lato",
                manrope: "Manrope",
                poppins: "Poppins",
            },
            borderRadius: {
                "3xs": "10px",
                "8xs": "5px",
                "6xl": "25px",
                "27xl-9": "46.9px",
                xl: "20px",
                "11xl": "30px",
                "31xl": "50px",
                "26xl": "45px",
                "16xl": "35px",
            },
        },
        fontSize: {
            sm: "14px",
            lg: "18px",
            base: "16px",
            xl: "20px",
            "2xs": "11px",
            mini: "15px",
            "17xl": "36px",
            "13xl": "32px",
            "7xl": "26px",
            "5xl": "24px",
            xs: "12px",
            smi: "13px",
            "21xl": "40px",
            "lgi-8": "19.8px",
            lgi: "19px",
            "29xl": "48px",
            inherit: "inherit",
=======
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
>>>>>>> 2a41908 (database seeder)
        },
    },

    plugins: [forms],
};
