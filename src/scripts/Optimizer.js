let currentPage = "home";

// Checks if the requested page by the user is already rendered,
// returns true if page is already rendered.
const checkRequestedPageFunction = (requestedPage) => {
    if (requestedPage === currentPage) {
        return true;
    } else {
        currentPage = requestedPage;
        return false;
    }
};

const checkRequestedPageCaller = (requestedPage) => {
    checkRequestedPageFunction(requestedPage);
};

const Optimizer = {
    checkRequestedPage: checkRequestedPageCaller,
};

export default Optimizer;