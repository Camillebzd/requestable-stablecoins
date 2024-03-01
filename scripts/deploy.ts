import { ethers } from "hardhat";

async function main() {
  const [ owner ] = await ethers.getSigners();
  const DAI = await ethers.deployContract("DAI", [owner.address]);
  await DAI.waitForDeployment();
  console.log("DAI deployed at:", await DAI.getAddress());
  console.log("DAI balance:", await DAI.balanceOf(owner.address) / 10n ** await DAI.decimals(), "\n");

  const USDC = await ethers.deployContract("USDC", [owner.address]);
  await USDC.waitForDeployment();
  console.log("USDC deployed at:", await USDC.getAddress());
  console.log("USDC balance:", await USDC.balanceOf(owner.address) / 10n ** await USDC.decimals(), "\n");

  const USDT = await ethers.deployContract("USDT", [owner.address]);
  await USDT.waitForDeployment();
  console.log("USDT deployed at:", await USDT.getAddress());
  console.log("USDT balance:", await USDT.balanceOf(owner.address) / 10n ** await USDT.decimals());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
