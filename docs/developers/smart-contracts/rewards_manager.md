
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::rewards_manager`

Rewards Manager Module
Calculates staking rewards and updates exchange rates
Handles reward distribution through rate adjustments


-  [Resource `RewardState`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardState)
-  [Struct `RewardsUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardsUpdated)
-  [Function `update_rewards`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_update_rewards)
-  [Function `get_exchange_rate`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_exchange_rate)
-  [Function `kapt_to_stkapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_kapt_to_stkapt)
-  [Function `stkapt_to_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_stkapt_to_kapt)
-  [Function `get_staked_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_apt)
-  [Function `get_staked_and_vault_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_and_vault_apt)
-  [Function `get_management_fees`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_management_fees)
-  [Function `get_total_management_fees`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_total_management_fees)
-  [Function `withdraw_fees_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_withdraw_fees_admin)


<pre><code><b>use</b> <a href="">0x1::delegation_pool</a>;
<b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::access_control</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::math</a>;
<b>use</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::stkAPT_coin</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardState"></a>

## Resource `RewardState`

Tracks last reward update time


<pre><code><b>struct</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardState">RewardState</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardsUpdated"></a>

## Struct `RewardsUpdated`

RewardsUpdated
Event emitted when rewards are updated


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_RewardsUpdated">RewardsUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_update_rewards"></a>

## Function `update_rewards`

Update rewards
* Updates kAPT supply based on total staked APT and applies management fee.



<pre><code><b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_update_rewards">update_rewards</a>()
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_exchange_rate"></a>

## Function `get_exchange_rate`

Get stkAPT/kAPT exchange rate
* Calculates current exchange rate between tokens
*
* @return u256: Amount of stkAPT per kAPT (fixed-point)



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_exchange_rate">get_exchange_rate</a>(): u256
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_kapt_to_stkapt"></a>

## Function `kapt_to_stkapt`

Convert kAPT to stkAPT
* Calculates stkAPT amount for given kAPT
*
* @param kapt_amount: u64: Amount of kAPT to convert
* @return u64: Equivalent amount of stkAPT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_kapt_to_stkapt">kapt_to_stkapt</a>(kapt_amount: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_stkapt_to_kapt"></a>

## Function `stkapt_to_kapt`

Convert stkAPT to kAPT
* Calculates kAPT amount for given stkAPT
*
* @param stkapt_amount: u64: Amount of stkAPT to convert
* @return u64: Equivalent amount of kAPT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_stkapt_to_kapt">stkapt_to_kapt</a>(stkapt_amount: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_apt"></a>

## Function `get_staked_apt`

Get total staked APT
* Returns total APT actively staked with validators
*
* @return u64: Total staked APT amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_apt">get_staked_apt</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_and_vault_apt"></a>

## Function `get_staked_and_vault_apt`

Get total APT in system
* Returns total APT staked plus APT in vault
*
* @return u64: Total APT in system



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_staked_and_vault_apt">get_staked_and_vault_apt</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_management_fees"></a>

## Function `get_management_fees`

Get management fees
* Returns total management fees collected.
*
* @return u64: Total collected fees in APT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_management_fees">get_management_fees</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_total_management_fees"></a>

## Function `get_total_management_fees`

Get total fees collected
* Returns total fees collected.
*
* @return u64: Total collected fees in APT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_get_total_management_fees">get_total_management_fees</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_withdraw_fees_admin"></a>

## Function `withdraw_fees_admin`

Withdraw collected fees
* Withdraws collected management fees to specified address.
*
* @param admin: signer: Admin account withdrawing fees
* @param recipient: address: Address to receive the fees
* @param amount: u64: Amount of fees to withdraw



<pre><code><b>public</b> entry <b>fun</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager_withdraw_fees_admin">withdraw_fees_admin</a>(admin: &<a href="">signer</a>, recipient: <b>address</b>, amount: u64)
</code></pre>
