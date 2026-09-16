// Imports section:
import "./styles.css";
import "./logo.js";
import Home from "./Pages/Home.js";
import Menu from "./Pages/Menu.js";
import About from "./Pages/About.js";

// Constants section:
const content = document.querySelector("#content");
const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");

// Main section:
Home.render(content);

btnHome.addEventListener('click', () => {
    Home.render(content);
});

btnMenu.addEventListener('click', () => {
    Menu.render(content);
});

btnAbout.addEventListener('click', () => {
    About.render(content);
});