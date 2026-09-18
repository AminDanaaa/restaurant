import Cleaner from "./Cleaner.js";

const renderFunction = (parentElement) => {
    Cleaner.clear(parentElement);
    parentElement.append("About");
};



const About = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default About;