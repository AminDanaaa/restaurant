// Imports section:
import "./styles.css";
import "./scripts/logo.js";
import Home from "./Pages/Home.js";
import Menu from "./Pages/Menu.js";
import About from "./Pages/About.js";
import Optimizer from "./scripts/Optimizer.js";

// Constants section:
const content = document.querySelector("#content");
const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");

// Main section:
const initialize = () => {
    btnHome.addEventListener('click', () => {
        if (!Optimizer.checkRequestedPage("home")) {
            Home.render(content);
        }
    });
    btnMenu.addEventListener('click', () => {
        if (!Optimizer.checkRequestedPage("menu")) {
            Menu.render(content);
        }
    });
    btnAbout.addEventListener('click', () => {
        if (!Optimizer.checkRequestedPage("about")) {
            About.render(content);
        }
    });

    btnHome.classList.add("active-button");
    Home.render(content);
};


// Execute:
initialize();