import Cleaner from "./Cleaner.js";
const btnAbout = document.querySelector("#about");



// Structure of page {Home} --Start
const main = document.createElement("div");
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