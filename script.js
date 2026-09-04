"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const mainMenu = document.getElementById("main-menu");

    if (!menuToggle || !mainMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    const menuLinks =
        mainMenu.querySelectorAll("a");

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /*
     * Close mobile menu when Escape is pressed.
     */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            mainMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();
        }

    });

});
