const renderFunction = (parentElement) => {
    const testChild = document.createElement("p");
    testChild.textContent = "(testChild): This is from [About.js].";
    const testChild2 = document.createElement("p");
    testChild2.textContent = "(testChild2): This is from [About.js]";
    parentElement.append(testChild, testChild2);
};



const About = {
    render: renderFunction,
};

export default About;