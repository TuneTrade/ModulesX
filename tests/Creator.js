var Creator = import("../Creator.mjs");

(async function() {
    Creator = new ((await Creator)["default"])(process.web3, process.settings.creator);
})();
