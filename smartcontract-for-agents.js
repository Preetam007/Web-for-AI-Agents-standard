import { defineDefAIContract } from "defai-agent";

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
