import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "";

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  "https://polygon-mumbai.g.alchemy.com/v2/your-api-key";
const POLYGONSCAN_API_KEY = 
  process.env.POLYGONSCAN_API_KEY || 
  "";
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/your-api-key";
const ETHERSCAN_API_KEY = 
  process.env.ETHERSCAN_API_KEY || 
  "";
const ETHERLINK_RPC_URL =
  process.env.ETHERLINK_RPC_URL ||
  "https://node.ghostnet.etherlink.com";
const ETHERLINK_API_KEY = 
  process.env.ETHERLINK_API_KEY || 
  "";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      chainId: 80001,
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    etherlink: {
      chainId: 128123,
      url: ETHERLINK_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
      etherlink: ETHERLINK_API_KEY,
      nightly: ETHERLINK_API_KEY
    },
    customChains: [
      {
        network: "etherlink",
        chainId: 128123,
        urls: {
          apiURL: "https://testnet-explorer.etherlink.com/api",
          browserURL: "https://testnet-explorer.etherlink.com"
        }
      }
    ]
  }
};

export default config;
