import { exec } from "child_process";

const contractAddress = process.argv[2];

if (!contractAddress) {
  console.error("Error: Please provide the contract address.");
  process.exit(1);
}

const command = `npx hardhat verify --network rome ${contractAddress}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
