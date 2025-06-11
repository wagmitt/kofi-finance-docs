---
sidebar_position: 1
---

# Contracts

## Modules

| Contract | Contract Address |
|----------|-------------|
| Kofi | [0x2cc52445acc4c5e5817a0ac475976fbef966fedb6e30e7db792e10619c76181f](https://explorer.aptoslabs.com/fungible_asset/0x2cc52445acc4c5e5817a0ac475976fbef966fedb6e30e7db792e10619c76181f?network=mainnet) |
| kAPT | [0x821c94e69bc7ca058c913b7b5e6b0a5c9fd1523d58723a966fb8c1f5ea888105](https://explorer.aptoslabs.com/fungible_asset/0x821c94e69bc7ca058c913b7b5e6b0a5c9fd1523d58723a966fb8c1f5ea888105?network=mainnet) |
| stkAPT | [0x42556039b88593e768c97ab1a3ab0c6a17230825769304482dff8fdebe4c002b](https://explorer.aptoslabs.com/fungible_asset/0x42556039b88593e768c97ab1a3ab0c6a17230825769304482dff8fdebe4c002b?network=mainnet) |

## Core Protocol Contracts

| Contract | Description |
|----------|-------------|
| gateway.move | Main entry point for staking/unstaking APT and minting/burning kAPT |
| kapt_coin.move | Liquid staking token (LST) contract representing staked APT at 1:1 ratio |
| stkapt_coin.move | Yield-bearing token contract for staked kAPT with reward accrual logic |
| minting_manager.move | Manages reward calculations and distribution of staking + boosted yields |
| staking_manager.move | Handles validator selection, delegation amounts and rebalancing |
| delegation_manager.move | Manages protocol fees, revenue distribution and treasury operations |
| rewards_manager.move | Manages staking rewards and boosted yields distribution |
| withdrawal_manager.move | Manages withdrawal logic and gas compensation |
| config.move | Manages protocol configuration and parameters |
| errors.move | Error codes for the protocol |
