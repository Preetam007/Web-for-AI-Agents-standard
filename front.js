import { defineAgentActions } from "web-for-agents";

const agentConfig = defineAgentActions({
  website: {
    name: "Example Store",
    url: "https://examplestore.com",
  },
  actions: {
    login: {
      type: "api",
      method: "POST",
      endpoint: "/api/auth",
      params: ["username", "password"],
    },
    addToCart: {
      type: "ui",
      selectors: {
        button: "#add-to-cart",
      },
    },
    checkout: {
      type: "api",
      method: "POST",
      endpoint: "/api/checkout",
      params: ["product_id", "quantity"],
    },
  },
  cryptoPayments: {
    enabled: true,
    supportedChains: ["Ethereum", "Solana"],
    addresses: {
      ETH: "0x123...",
    },
  },
});
