const clearFunction = (targetElement) => {
    targetElement.innerHTML = "";
};



const Cleaner = {
    clear(targetElement) {
        clearFunction(targetElement);
    },
};

export default Cleaner;