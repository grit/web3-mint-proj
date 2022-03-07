const hre = require('hardhat');

async function main() {
  const ProxyPunksNFT = await hre.ethers.getContractFactory('ProxyPunksNFT');
  const proxyPunksNFT = await ProxyPunksNFT.deploy();

  await proxyPunksNFT.deployed();

  console.log('ProxyPunksNFT deployed to:', proxyPunksNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
