const renderFunction = (parentElement) => {
    const testChild = document.createElement("p");
    testChild.textContent = "(testChild): This is from [Menu.js].";
    const testChild2 = document.createElement("p");
    testChild2.textContent = "(testChild2): This is from [Menu.js]";
    parentElement.append(testChild, testChild2);
};



const Menu = {
    render: renderFunction,
};

export default Menu;