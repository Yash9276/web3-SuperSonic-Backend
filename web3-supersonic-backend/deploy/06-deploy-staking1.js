const {networkConfig,developmentChains,}=require('../helper-hardhat-config.js')
require("dotenv").config()
const {network}=require('hardhat');
// const {verify}=require('../utils/verify.js')

module.exports=async({getNamedAccounts,deployments})=>{
    const {deploy,log}=deployments;
    const {deployer}=await getNamedAccounts();
    const chainId=network.config.chainId
    const Staking1=await deploy("Staking1",{
        from:deployer,
        args:["0x8906703499ca670dEf5D0FfB190db5C82339A030"],
        log:true,
        waitConfirmations:network.config.blockConfirmations || 1,
    })

    // if (network.config.chainId === 1000 && process.env.CONFLUXSCAN_API_KEY) {
    //     console.log("Waiting for block confirmations...")
    //     await verify(Staking.address, [])
    //   }
    

    log("----------------------------------")
}
module.exports.tags=["all","Staking1"]