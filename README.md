# Stablecoins

This repo contains simple ERC20 contracts to replicate stablecoins like USDT, USDC, etc. Each stablecoins have a `requestTokens` method that can be used by users to make the contract act like a faucet and allow users to request some stablecoins for tests.

## Setup

Create a `.env` file that follow the `.env.example` content.

Install the dependencies:
```sh
npm install
```

## Deploy and verify

You can deploy the contracts:
```sh
npx hardhat run scripts/deploy.ts --network <your-network>
```

Then, verify each contract with:
```sh
npx hardhat verify <contract-address> --contract contracts/<file-contract-name>:<stablecoin-name> --network <your-network> <your-wallet-address>
```

Example:
```sh
npx hardhat verify 0x07648428EF73dde0ba38D3775C6aaDc48fD20d9D --contract contracts/USDC.sol:USDC --network etherlink 0x0863A707DBfdCeC01Ee55A92AA77c38d9f3645E5
```

## Addresses

### Etherlink testnet

DAI deployed at: 0xb8f26e0c5cc99Cdd8A42Ae8A8BaEbB20ecBD1C99

USDC deployed at: 0x07648428EF73dde0ba38D3775C6aaDc48fD20d9D

USDT deployed at: 0x42b2ae83596fA9f4D8D9958f571a10934ED5B2cc