var TXT = import("../ERC20.mjs");

(async function() {
    TXT = new ((await TXT)["default"])(process.web3, process.settings.txt);
})();
