
const dummyAPIResponse = {
    showAccordian: true,
    showRandomColor: true,
    showStarRating: true,
    showImageSlider: true,
    showLoadMoreData: true,
    showTreeNavMenu: true,
    showQRCodeGenerator: true,
    showLightAndDarkMode: true,
    showScrollBar: true,
    showCustomTabs: true,
    showPopUpModal: true,
    showGithubProfileFinder: true,
    showSearchOptimization: true,
    showTicTacToe: true
}

function DataCall() {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 2000);
        else reject('Error fetching data!!! Please Try Again');
    });
}

export default DataCall;