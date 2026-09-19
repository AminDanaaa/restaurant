import Cleaner from "./Cleaner.js";
import { menuTexts } from "../Strings/Strings.js";
const btnMenu = document.querySelector("#menu");



// Structure of page {Menu} --Start
const main = document.createElement("div");
main.classList.add("menu-content");

const margherita = document.createElement("div");
margherita.classList.add("pizza-margherita");
const margheritaTitle = document.createElement("h2");
margheritaTitle.textContent = menuTexts.margheritaTitle;
const margheritaInfo = document.createElement("p");
margheritaInfo.textContent = menuTexts.margheritaInfo;
margherita.append(margheritaTitle, margheritaInfo);

const pepperoni = document.createElement("div");
pepperoni.classList.add("pizza-pepperoni");
const pepperoniTitle = document.createElement("h2");
pepperoniTitle.textContent = menuTexts.pepperoniTitle;
const pepperoniInfo = document.createElement("p");
pepperoniInfo.textContent = menuTexts.pepperoniInfo;
pepperoni.append(pepperoniTitle, pepperoniInfo);

const cheeseTomato = document.createElement("div");
cheeseTomato.classList.add("pizza-cheese-tomato");
const cheeseTomatoTitle = document.createElement("h2");
cheeseTomatoTitle.textContent = menuTexts.cheeseTomatoTitle;
const cheeseTomatoInfo = document.createElement("p");
cheeseTomatoInfo.textContent = menuTexts.cheeseTomatoInfo;
cheeseTomato.append(cheeseTomatoTitle, cheeseTomatoInfo);

const vegDelight = document.createElement("div");
vegDelight.classList.add("pizza-veg-delight");
const vegDelightTitle = document.createElement("h2");
vegDelightTitle.textContent = menuTexts.vegDelightTitle;
const vegDelightInfo = document.createElement("p");
vegDelightInfo.textContent = menuTexts.vegDelightInfo;
vegDelight.append(vegDelightTitle, vegDelightInfo);

const italianHerb = document.createElement("div");
italianHerb.classList.add("pizza-italian-herb");
const italianHerbTitle = document.createElement("h2");
italianHerbTitle.textContent = menuTexts.italianHerbTitle;
const italianHerbInfo = document.createElement("p");
italianHerbInfo.textContent = menuTexts.italianHerbInfo;
italianHerb.append(italianHerbTitle, italianHerbInfo);

const plainMozzarella = document.createElement("div");
plainMozzarella.classList.add("pizza-plain-mozzarella");
const plainMozzarellaTitle = document.createElement("h2");
plainMozzarellaTitle.textContent = menuTexts.plainMozzarellaTitle;
const plainMozzarellaInfo = document.createElement("p");
plainMozzarellaInfo.textContent = menuTexts.plainMozzarellaInfo;
plainMozzarella.append(plainMozzarellaTitle, plainMozzarellaInfo);

const moreSoon = document.createElement("div");
moreSoon.classList.add("pizza-more-soon");
const moreSoonTitle = document.createElement("h2");
moreSoonTitle.textContent = menuTexts.moreSoonTitle;
const moreSoonInfo = document.createElement("p");
moreSoonInfo.textContent = menuTexts.moreSoonInfo;
moreSoon.append(moreSoonTitle, moreSoonInfo);

main.append(margherita, pepperoni, cheeseTomato, vegDelight, italianHerb, plainMozzarella, moreSoon);
// Structure of page {Menu} --End



const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnMenu.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append(main);
};


// Exported Object
const Menu = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Menu;