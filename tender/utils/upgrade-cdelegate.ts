import hre from "hardhat";

const contracts = {
  "tfsGLP": "0xFF2073D3810754D6da4783235c8647e11e43C943",
  // "tWBTC": "0xde131f422585927c5d19879ee22241678273b155",
  // "tUSDC": "0xB1087a450373BB26BCf1A18E788269bde9c8fc85",
  // "tUSDT": "0xAd2fB9A27Fd46865BBa1d2954BD0700e7428Dfb7"
}

const allowResign = true
const data = Buffer.from([0x0])
const implementation = "0x5A99dC4d0BCA30C31D894a3c5b00dDE1c277D5cA"


export async function main() {

  for (let key in contracts) {
    await setAddress(key, contracts[key], implementation);
  }
}

async function setAddress(symbol: string, address: string, implementation: string) {
  const delegator = await hre.ethers.getContractAt("CErc20Delegator", address);

  console.log("setting implementation on", symbol, address, "to", implementation)
  
  await delegator._setImplementation(implementation, allowResign, data)

  console.log("Set implementation")

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
