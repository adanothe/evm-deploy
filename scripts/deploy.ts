import hre from "hardhat";
import fs from "fs";
import path from "path";

function getContractNameFromArtifacts(): string {
  const artifactsPath = path.join(__dirname, "..", "artifacts", "contracts");
  const contractDirs = fs.readdirSync(artifactsPath);

  for (const dir of contractDirs) {
    const dirPath = path.join(artifactsPath, dir);
    if (fs.statSync(dirPath).isDirectory()) {
      const contractFiles = fs.readdirSync(dirPath);

      for (const file of contractFiles) {
        if (file.endsWith(".json") && !file.endsWith(".dbg.json")) {
          const contractName = file.split(".")[0];
          return contractName;
        }
      }
    }
  }

  throw new Error("No contract found in artifacts folder.");
}

async function main() {
  const gasLimit = 3000000;
  const contractName = getContractNameFromArtifacts();

  console.log(`Deploying contract: ${contractName}`);

  const contract = await hre.ethers.deployContract(contractName, [], {
    gasLimit: gasLimit,
  });

  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();

  console.log(`Contract deployed to ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
