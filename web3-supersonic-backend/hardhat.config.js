require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
// require("hardhat-deploy");
// const SEPOLIA_RPC_URL =
//   process.env.SEPOLIA_RPC_URL
  // const SONIC_RPC_URL =
  // process.env.SONIC_RPC_URL
  // const PRIVATE_KEY =
  // process.env.PRIVATE_KEY
  // const SEI_RPC_URL =
  // process.env.SEI_RPC_URL
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sei: {
      url: "https://evm-rpc-testnet.sei-apis.com",
      accounts: ['1e6370e71ffa39760e9392372bc2a33d18d8cde6d9119415b0662c3939bba0ee'],
      chainId: 1328,
      blockConfirmations: 5,
    },
    //1e6370e71ffa39760e9392372bc2a33d18d8cde6d9119415b0662c3939bba0ee
    sonic:{
      url: "https://rpc.testnet.soniclabs.com",
      accounts: ['1e6370e71ffa39760e9392372bc2a33d18d8cde6d9119415b0662c3939bba0ee'],
      chainId: 14601,
      blockConfirmations: 5
    },
      gnosis:{
      url: "https://gnosis-chiado-rpc.publicnode.com",
      accounts:['0d02f37a8a639019ab22daf388c53f6f27f7b02102180d444a23d94c2dcbc79a'],
      chainId: 10200,
      blockConfirmations: 5
    }
    
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
}
};
