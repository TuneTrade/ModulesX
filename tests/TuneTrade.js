var TuneTrade = import("../TuneTrade.mjs");

(async function() {
    TuneTrade = new ((await TuneTrade)["default"])(process.web3, process.settings.tunetrade);
})();
