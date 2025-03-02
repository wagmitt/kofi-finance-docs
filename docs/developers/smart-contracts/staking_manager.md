
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::staking_manager`

Staking Manager Module

Manages APT delegation to validators through delegation pools.
Features:
* Staking APT and minting kAPT tokens
* Unstaking APT and burning kAPT tokens
* Validator selection and management
* Delegation pool integration


-  [Struct `StakeEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_StakeEvent)
-  [Struct `UnstakeEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_UnstakeEvent)
-  [Function `stake`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_stake)
-  [Function `unstake`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_unstake)


<pre><code><b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::fungible_asset</a>;
<b>use</b> <a href="">0x1::object</a>;
<b>use</b> <a href="">0x1::primary_fungible_store</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::vector</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::rewards_manager</a>;
<b>use</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::stkAPT_coin</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_StakeEvent"></a>

## Struct `StakeEvent`

Stake event
Emitted when APT is staked.

@param user: address: Address of the user who staked
@param kapt_amount: u64: Amount of kAPT staked
@param stkapt_amount: u64: Amount of stkAPT minted



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="staking_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_StakeEvent">StakeEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_UnstakeEvent"></a>

## Struct `UnstakeEvent`

Unstake event
Emitted when APT is unstaked.

@param user: address: Address of the user who unstaked
@param kapt_amount: u64: Amount of kAPT unstaked
@param stkapt_amount: u64: Amount of stkAPT burned



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="staking_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_UnstakeEvent">UnstakeEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_stake"></a>

## Function `stake`

Stake APT with validators through delegation pools
*
* Accepts APT coins, delegates them to validators, and mints kAPT tokens
* to the user's account in a 1:1 ratio.
*
* Flow:
* 1. Verify stake amount meets minimum
* 2. Store APT in vault
* 3. Add stake to delegation pool
* 4. Mint kAPT to user
* 5. Emit stake event
*
* Parameters:
* * <code>user</code> - The signer of the depositing account
* * <code>kapt_coins</code> - kAPT coins to stake
*
* Aborts:
* * If amount is less than minimum stake amount
* * If no validator is available



<pre><code><b>public</b> <b>fun</b> <a href="">stake</a>(user: &<a href="">signer</a>, kapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_unstake"></a>

## Function `unstake`


* Unstake stkAPT and undelegate APT from validators
*
* Accepts stkAPT coins, and returns kAPT tokens
* to the user's account based on the exchange rate.
*
* Flow:
* 1. Verify stkAPT amount meets minimum
* 2. Burn stkAPT
* 3. Return kAPT to user
* 4. Emit unstake event



<pre><code><b>public</b> <b>fun</b> <a href="staking_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager_unstake">unstake</a>(user: &<a href="">signer</a>, stkapt_amount: u64): u64
</code></pre>
