process.settings = require("./settings.json");
process.web3 = new (require("web3"))(process.settings.infura);

require("./ERC20.js");
require("./Creator.js");
require("./TuneTrade.js");
