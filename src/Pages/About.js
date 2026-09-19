import Cleaner from "./Cleaner.js";
import SVG from "../SVG/SVG.js";
import { aboutTexts } from "./Strings/Strings.js";
const btnAbout = document.querySelector("#about");



// Structure of page {About} --Start
const main = document.createElement("div");
main.classList.add("about-content");

const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-info");
const contactLogo = document.createElement("div");
contactLogo.classList.add("contact-logo");
contactLogo.innerHTML = SVG.mail;
const contactInfoDiv = document.createElement("div");
contactInfoDiv.classList.add("contact-text");        // <-- added
const contactInfoTitle = document.createElement("h3");
const contactInfoText = document.createElement("h2");
contactInfoTitle.classList.add("no-select");
contactInfoTitle.textContent = aboutTexts.email;
contactInfoText.textContent = aboutTexts.emailAddress;
contactInfoDiv.append(contactInfoTitle, contactInfoText);
contactDiv.append(contactLogo, contactInfoDiv);

const addressDiv = document.createElement("div");
addressDiv.classList.add("address-info");
const addressLogo = document.createElement("div");
addressLogo.classList.add("address-logo");
addressLogo.innerHTML = SVG.location;
const addressInfoDiv = document.createElement("div");
addressInfoDiv.classList.add("address-text");        // <-- added
const addressInfoTitle = document.createElement("h3");
const addressInfoText = document.createElement("h2");
addressInfoTitle.textContent = aboutTexts.address;
addressInfoTitle.classList.add("no-select");
addressInfoText.textContent = aboutTexts.addressFull;
addressInfoDiv.append(addressInfoTitle, addressInfoText);
addressDiv.append(addressLogo, addressInfoDiv);

const crewDiv = document.createElement("div");
crewDiv.classList.add("crew-box");

// Owner Info
const crewOwner = document.createElement("div");
const crewOwnerPFP = document.createElement("div");
crewOwnerPFP.classList.add("pfp", "pfp-owner");
const crewOwnerText = document.createElement("h3");
crewOwnerText.textContent = "Owner: Amin Dana";
crewOwner.append(crewOwnerPFP, crewOwnerText);

// Chef Info
const crewChef = document.createElement("div");
const crewChefPFP = document.createElement("div");
crewChefPFP.classList.add("pfp", "pfp-chef");
const crewChefText = document.createElement("h3");
crewChefText.textContent = "Chef: The Flork";
crewChef.append(crewChefPFP, crewChefText);

// Waiter Info
const crewWaiter = document.createElement("div");
const crewWaiterPFP = document.createElement("div");
crewWaiterPFP.classList.add("pfp", "pfp-waiter");
const crewWaiterText = document.createElement("h3");
crewWaiterText.textContent = "Waiter: Cute Monk";
crewWaiter.append(crewWaiterPFP, crewWaiterText);

// Delivery Info
const crewDelivery = document.createElement("div");
const crewDeliveryPFP = document.createElement("div");
crewDeliveryPFP.classList.add("pfp", "pfp-delivery");
const crewDeliveryText = document.createElement("h3");
crewDeliveryText.textContent = "Delivery: Bunny Blaze";
crewDelivery.append(crewDeliveryPFP, crewDeliveryText);

// append crew boxes
crewDiv.append(crewOwner, crewChef, crewWaiter, crewDelivery);

main.append(contactDiv, addressDiv, crewDiv);
// Structure of page {About} --End


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