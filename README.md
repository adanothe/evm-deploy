# Deploy Smart Contract on Rome EVM

This guide will walk you through the steps to deploy and verify a smart contract on the Rome EVM network.

## Steps

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/adanothe/evm-deploy.git
cd evm-deploy
```

### 2. Install Dependencies

Install the required dependencies for the project:

```bash
npm install
```

### 3. Set Up the `.env` File

Create a `.env` file in the root of the project and add your private key:

```bash
PRIVATE_KEY="your-private-key"
```

> **Note:** Replace `"your-private-key"` with your actual private key. This key will be used to sign transactions during deployment.

### 4. Create the Smart Contract

1. Navigate to the `contracts/` folder in your project directory.
2. Create a new `.sol` file for your smart contract.
3. Paste your contract code or use [OpenZeppelin Contracts Wizard](https://wizard.openzeppelin.com/) to generate secure contract templates.

> **Compiler Version:**  
Ensure that your Solidity contract is compiled with a version greater than or equal to `0.8.26` and less than `0.9.0`. The Hardhat configuration for the project is already set up to use Solidity version `0.8.26`.

### 5. Compile the Smart Contract

To compile your smart contract, run the following command:

```bash
npm run compile
```

This will compile the Solidity contract code into artifacts used for deployment.

### 6. Deploy the Smart Contract

Once your contract is compiled, you can deploy it to the Rome EVM network using the following command:

```bash
npm run deploy
```

This command will deploy the smart contract using the private key stored in your `.env` file.

### 7. Verify Your Contract (Optional)

If you would like to verify your contract on a block explorer after deployment, you can use the `verify` command:

```bash
npm run verify <CONTRACT_ADDRESS>
```

> **Note:** Replace `<CONTRACT_ADDRESS>` with the your contract address.

### 8. Clean Previous Artifacts (Optional)

If you're deploying a new contract and want to clean up previous artifacts, you can run:

```bash
npm run clean
```

This will delete the existing compiled contract artifacts, ensuring a fresh deployment.

## Network Information

- **EVM RPC Endpoint:** [https://rome.testnet.romeprotocol.xyz](https://rome.testnet.romeprotocol.xyz)
- **Chain ID:** 200002
- **EVM Block Explorer:** [https://rome.testnet.romeprotocol.xyz:1000](https://rome.testnet.romeprotocol.xyz:1000)

## Additional Resources

Stay updated and join the community through the following channels:

- [Documentation](https://docs.rome.builders/)
- [Telegram](https://t.me/+H_YcdScUrLI5MDZk)
- [X (Twitter)](https://x.com/RomeProtocol)
- [Discord](https://discord.com/invite/h8r3bu7v)
- [GitHub](https://github.com/rome-labs)
- [Website](https://www.rome.builders/)

## Troubleshooting

If you run into any issues during the deployment or verification process, check the following:
- Ensure your private key is correct and has enough funds for gas fees.
- Double-check that your network configuration in Hardhat is set to the correct Rome EVM endpoint.

---