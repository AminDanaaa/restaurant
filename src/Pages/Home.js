import Cleaner from "./Cleaner.js";

const renderFunction = (parentElement) => {
    Cleaner.clear(parentElement);
    parentElement.append("Home");
};



const Home = {
    render(parentElement) {
        renderFunction(parentElement);
    },
};

export default Home;