// defai-agent.js
// A simple NPM module to define AI agent navigable smart contract interactions

export function defineDefAIContract(config) {
  return config;
}

// Example usage
const agentConfig = defineDefAIContract({
  contract: {
    name: "ExampleToken",
    address: "0x123456789abcdef",
    chain: "Ethereum",
    abi: [
      {
        name: "transfer",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { name: "recipient", type: "address" },
          { name: "amount", type: "uint256" }
        ],
        outputs: []
      }
    ]
  },
  actions: {
    send_tokens: {
      function: "transfer",
      params: ["recipient", "amount"],
      gasLimit: 60000
    }
  }
});

export default agentConfig;

