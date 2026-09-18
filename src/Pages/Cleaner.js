

const clearFunction = (targetElement) => {
    targetElement.innerHTML = "";
};

const clearActiveButtonFunction = () => {
    document.querySelector(".active-button").classList.remove("active-button");
};



const Cleaner = {
    clear(targetElement) {
        clearFunction(targetElement);
    },

    clearActiveButton() {
        clearActiveButtonFunction();
    },
};

export default Cleaner;