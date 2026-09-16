import Cleaner from "./Cleaner.js";

const renderFunction = (parentElement) => {
    Cleaner.clear(parentElement);
    const testChild = document.createElement("p");
    testChild.textContent = "(testChild): This is from [Home.js].";
    const testChild2 = document.createElement("p");
    testChild2.textContent = "(testChild2): This is from [Home.js]";
    parentElement.append(testChild, testChild2);
};



const Home = {
    render: renderFunction,
};

export default Home;