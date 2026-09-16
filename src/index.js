import "./styles.css";
import SVG from "./SVG/SVG.js";

const logo = document.querySelector(".logo");
logo.innerHTML = SVG.logo;
logo.innerHTML += "<h1>Dana Restaurant</h1>";