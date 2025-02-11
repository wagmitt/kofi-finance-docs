---
sidebar_position: 1
---

# Contracts

## Core Protocol Contracts

### Liquid Staking Contract
- **Address**: `0xXXX...XXX`
- Handles APT staking and kAPT minting
- Manages validator set and delegation
- Processes rewards distribution

### Token Contracts
- **kAPT**: `0xXXX...XXX`
  - Liquid staking receipt token
  - ERC-20 compatible
  - Tracks staking share

- **stkAPT**: `0xXXX...XXX`
  - Non-transferable staking token
  - Used for Kofi Points program
  - Governance participation

### Treasury Contract
- **Address**: `0xXXX...XXX`
- Manages protocol fees
- Handles revenue distribution
- Controls protocol reserves

## Contract Features

### Access Control
- Role-based access control
- Multi-signature requirements
- Time-locks on critical functions

### Safety Mechanisms
- Emergency pause functionality
- Slashing protection
- Rate limiting
- Oracle guards

### Upgradeability
- Transparent proxy pattern
- Time-locked upgrades
- Governance controlled

## Contract Interactions

### Staking Flow
1. User deposits APT
2. Contract mints kAPT
3. APT is delegated to validators
4. Rewards accrue to exchange rate

### Unstaking Flow
1. User burns kAPT
2. Contract initiates unstaking
3. APT is undelegated
4. User receives APT after delay

## Development Practices

- Comprehensive test coverage
- Regular security reviews
- Open-source code
- Documentation maintenance 