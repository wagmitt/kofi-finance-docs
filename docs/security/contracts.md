---
sidebar_position: 1
---

# Contracts

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
