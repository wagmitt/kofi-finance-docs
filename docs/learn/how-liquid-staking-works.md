---
sidebar_position: 2
---

# How Liquid Staking Works

## The Technical Mechanics of Liquid Staking

Liquid staking combines traditional staking with tokenization to create a system that preserves liquidity while still allowing users to earn staking rewards. Let's break down how this works behind the scenes.

## The Step-by-Step Process

### 1. Deposit and Delegation

When you deposit your APT tokens with Kofi:

- Your tokens are pooled with other users' tokens
- The protocol delegates these tokens to carefully selected validators on the Aptos network
- These validators participate in consensus and earn rewards for securing the network
- The protocol maintains records of each user's proportional ownership of the pool

### 2. Minting Liquid Staking Tokens

After depositing:

- The protocol mints and issues you kAPT tokens at a 1:1 ratio to your deposited APT
- These kAPT tokens represent your ownership stake in the pool of staked APT
- The kAPT tokens are fully transferable and can be used throughout the DeFi ecosystem
- You can further stake your kAPT to receive stkAPT, which is the yield-bearing token

### 3. Reward Accrual

As your staked APT earns rewards:

- Validators earn rewards for their participation in consensus
- These rewards flow back to the staking pool
- The value of kAPT relative to APT remains pegged at 1:1 and does not accrue rewards
- With stkAPT, rewards are directly reflected in the token's increasing exchange rate relative to kAPT and APT

### 4. Redemption Process

When you want to retrieve your original APT:

- **For kAPT holders**: You can return your kAPT to the protocol at a 1:1 ratio for APT
- **For stkAPT holders**: You first convert stkAPT back to kAPT (receiving more kAPT than you initially staked due to accrued rewards), then redeem kAPT for APT
- The unstaking process on Aptos has a waiting period of 14 days before you receive your APT
- Alternatively, you can instantly trade your kAPT or stkAPT for other assets on supported exchanges if you need immediate liquidity without waiting for the unstaking period

## The Role of Smart Contracts

Liquid staking protocols like Kofi rely on several key smart contracts:

- **Gateway Contract**: Handles deposits, withdrawals, and minting of liquid staking tokens
- **Staking Manager**: Manages validator selection and delegation strategies
- **Reward Distribution**: Calculates and distributes staking rewards
- **Token Contracts**: Implements the liquid staking tokens (kAPT and stkAPT) with their specific behaviors

These contracts work together to create a secure, automated system that requires minimal user intervention once set up.

## Validator Selection and Security

A critical aspect of liquid staking is how validators are selected:

- Protocols typically select validators based on performance, reliability, and security
- Diversification across multiple validators reduces risk
- Regular performance monitoring ensures optimal returns
- Slashing protection mechanisms help safeguard user funds

## The Economics of Liquid Staking

The economic model of liquid staking creates several interesting dynamics:

- **Exchange Rate Mechanism**: For yield-bearing tokens like stkAPT, the value increases over time relative to the underlying asset as rewards accumulate. kAPT maintains a stable 1:1 peg with APT.
- **Protocol Fees**: Most protocols charge a small fee on staking rewards to sustain operations
- **Market Dynamics**: Supply and demand for liquid staking tokens can create temporary premiums or discounts in secondary markets

## Advanced Concept: Dual Token Model

Kofi implements an innovative dual token model:

- **kAPT**: Pegged 1:1 with APT, designed for stability and composability. kAPT does not accrue staking rewards and maintains a constant 1:1 ratio with APT.
- **stkAPT**: A yield-bearing token that directly accrues staking rewards plus additional boosted yields. The value of stkAPT increases over time relative to kAPT and APT as rewards accumulate.

This approach offers users flexibility in how they want to interact with their staked assets and earn rewards. Users can choose kAPT for stable value and maximum composability in DeFi, or stkAPT for automatic yield accrual.

## Next Steps

Now that you understand how liquid staking works technically, you might want to explore:

- [Benefits of Liquid Staking](/learn/benefits-of-liquid-staking) - The advantages this mechanism provides
- [Risks of Liquid Staking](/learn/risks-of-liquid-staking) - Important technical considerations
- [Comparing Staking Methods](/learn/liquid-staking-vs-traditional) - A detailed comparison between the different staking methods

:::tip Technical Note
The specific implementation details may vary between different liquid staking protocols. This explanation covers the general mechanics that most protocols, including Kofi, follow.
:::
