require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
// require("hardhat-deploy");
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL
  const SONIC_RPC_URL =
  process.env.SONIC_RPC_URL
  const PRIVATE_KEY =
  process.env.PRIVATE_KEY
  const SEI_RPC_URL =
  process.env.SEI_RPC_URL
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 5,
    },
    sonic:{
      url: SONIC_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 57054,
      blockConfirmations: 5
    },
      sei:{
      url: SEI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1328,
      blockConfirmations: 5
    }
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
}
};
