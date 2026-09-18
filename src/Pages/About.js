import Cleaner from "./Cleaner.js";
import SVG from "../SVG/SVG.js";
import { aboutTexts } from "./Strings/Strings.js";
const btnAbout = document.querySelector("#about");



// Structure of page {Home} --Start
const main = document.createElement("div");
main.classList.add("about-content");
const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-info");
const contactLogo = document.createElement("div");
contactLogo.innerHTML = SVG.mail;
const contactInfoDiv = document.createElement("div");
const contactInfoTitle = document.createElement("h3");
const contactInfoText = document.createElement("h2");
contactInfoTitle.classList.add("no-select");
contactInfoTitle.textContent = aboutTexts.email
contactInfoText.textContent = aboutTexts.emailAddress;
contactInfoDiv.append(contactInfoTitle, contactInfoText);
contactDiv.append(contactLogo, contactInfoDiv);
const addressDiv = document.createElement("div");
addressDiv.classList.add("address-info");
const addressLogo = document.createElement("div");
addressLogo.innerHTML = SVG.location;
const addressInfoDiv = document.createElement("div");
const addressInfoTitle = document.createElement("h3");
const addressInfoText = document.createElement("h2");
addressInfoTitle.textContent = aboutTexts.address;
addressInfoTitle.classList.add("no-select");
addressInfoText.textContent = aboutTexts.addressFull;
addressInfoDiv.append(addressInfoTitle, addressInfoText);
addressDiv.append(addressLogo, addressInfoDiv);
const crewDiv = document.createElement("div");
crewDiv.classList.add("crew-box");
main.append(contactDiv, addressDiv, crewDiv);
// Structure of page {Home} --End



const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnAbout.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append(main);
};


// Exported Object
const About = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default About;