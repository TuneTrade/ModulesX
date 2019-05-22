var abi = [{"constant":true,"inputs":[{"name":"song","type":"address"}],"name":"getSongsLength","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_song","type":"address"}],"name":"removeSong","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"icoCreationFeeTXT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_teamTokens","type":"uint256"},{"name":"_constraints","type":"uint256[]"},{"name":"_price","type":"uint256"},{"name":"_durationDays","type":"uint256"},{"name":"_presaleDuration","type":"uint256"},{"name":"_bonuses","type":"uint8[]"},{"name":"assignedTokens","type":"uint256"}],"name":"addICO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationFeeTXT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"txtFeesEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSongs","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenCreationFeeTXT","type":"uint256"},{"name":"_icoCreationFeeTXT","type":"uint256"},{"name":"_icoInvestmentsFee","type":"uint256"}],"name":"changeFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_songToken","type":"address"},{"name":"_songOwner","type":"address"}],"name":"addExistingToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"song","type":"address"}],"name":"getICO","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMySongs","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"weiAmount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"withdrawEth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_author","type":"string"},{"name":"_genre","type":"string"},{"name":"_entryType","type":"uint8"},{"name":"_website","type":"string"},{"name":"_totalSupply","type":"uint256"},{"name":"_symbol","type":"string"},{"name":"_description","type":"string"},{"name":"_soundcloud","type":"string"},{"name":"_youtube","type":"string"},{"name":"_ico","type":"bool"},{"name":"_decimals","type":"uint8"},{"name":"_id","type":"uint256"}],"name":"addSong","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"txtToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"delayForChangeFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"icoInvestmentsFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastFeeChangedAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_storage","type":"address"},{"name":"_tokenCreationFeeTXT","type":"uint256"},{"name":"_icoCreationFeeTXT","type":"uint256"},{"name":"_icoInvestmentsFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

class TuneTrader {
    constructor(
        web3,
        address
    ) {
        this.web3 = web3;
        this.contract = new web3.eth.Contract(abi, address);
    }

    async getTXTTokenAddress() {
        return await this.contract.methods.txtToken().call();
    }
    async getTokenCreationFee() {
        return await this.contract.methods.tokenCreationFeeTXT().call();
    }
    async getICOCreationFee() {
        return await this.contract.methods.icoCreationFeeTXT().call();
    }
    async getICOContributionTax() {
        return await this.contract.methods.icoInvestmentsFee().call();
    }
    async getIfFeesEnabled() {
        return await this.contract.methods.txtFeesEnabled().call();
    }
    async getTimeOfLastFeeChange() {
        return await this.contract.methods.lastFeeChangedAt().call();
    }
    async getDelayForFeeChange() {
        return await this.contract.methods.delayForChangeFee().call();
    }

    async addICO(
        payoutAddress,
        tokenQuantity,
        teamTokens,
        saleDuration,
        presaleDuration,
        tokensPerWei,
        bonus,
        maxEther
    ) {}

    async addCreator(
		name,
		author,
		genre,
		type,
		website,
        totalSupply,
        symbol,
        description,
        soundcloud,
        youtube,
        ico,
        decimals
    ) {}

    async removeCreator(
        creator,
        from
    ) {
        await this.contracts.methods.removeSong(creator).send({
            from: from,
            gas: 0
        });
    }

    async getCreators() {
        return await this.contract.methods.getSongs().call();
    }
}

export default TuneTrader;
