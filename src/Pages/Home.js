import Cleaner from "./Cleaner.js";
import { homeTexts } from "./Strings/Strings.js";
const btnHome = document.querySelector("#home");



// Structure of page {Home} --Start
const main = document.createElement("div");
main.classList.add("home-content");
const welcomeDiv = document.createElement("div");
const welcomeHeader = document.createElement("h1");
welcomeHeader.textContent = homeTexts.welcomeHeader;
const welcomeParagraph = document.createElement("p");
welcomeParagraph.textContent = homeTexts.welcomeParagraph;
welcomeDiv.append(welcomeHeader, welcomeParagraph);
const smallMessage = document.createElement("p");
smallMessage.textContent = "Everyone's welcome here.";
main.append(welcomeDiv, smallMessage);
// Structure of page {Home} --End



const renderFunction = (parentElement) => {
    Cleaner.clearActiveButton();
    btnHome.classList.add("active-button");
    Cleaner.clear(parentElement);
    parentElement.append(main);
};


// Exported Object
const Home = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Home;