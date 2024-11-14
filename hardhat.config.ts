import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    rome: {
      url: "https://rome.testnet.romeprotocol.xyz",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      "rome": "abc",
    },
    customChains: [
      {
        network: "rome",
        chainId: 200002,
        urls: {
          apiURL: "https://rometesteu1.testnet.romeprotocol.xyz:1000/api",
          browserURL: "https://rome.testnet.romeprotocol.xyz:1000",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
