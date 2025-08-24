const {networkConfig,developmentChains,}=require('../helper-hardhat-config.js')
require("dotenv").config()
const {network}=require('hardhat');
// const {verify}=require('../utils/verify.js')

module.exports=async({getNamedAccounts,deployments})=>{
    const {deploy,log}=deployments;
    const {deployer}=await getNamedAccounts();
    const chainId=network.config.chainId
    const Staking=await deploy("Staking",{
        from:deployer,
        args:["0x19C846803F690a534BB744174F9672bffFab2E1F"],
        log:true,
        waitConfirmations:network.config.blockConfirmations || 1,
    })

    if (network.config.chainId === 1000 && process.env.CONFLUXSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await verify(Staking.address, [])
      }
    

    log("----------------------------------")
}
module.exports.tags=["all","Staking"]