
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::gateway`

Gateway Module
Entry points for Kofi Finance


-  [Function `deposit_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_entry)
-  [Function `deposit_and_stake_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_and_stake_entry)
-  [Function `stake_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_stake_entry)
-  [Function `unstake_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_entry)
-  [Function `unstake_and_request_withdrawal_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_and_request_withdrawal_entry)
-  [Function `request_withdrawal_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_request_withdrawal_entry)
-  [Function `finalize_withdrawals_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_finalize_withdrawals_entry)
-  [Function `update_rewards_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_update_rewards_entry)
-  [Function `quote_deposit_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_quote_deposit_entry)


<pre><code><b>use</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::delegation_manager</a>;
<b>use</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::minting_manager</a>;
<b>use</b> <a href="rewards_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_rewards_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::rewards_manager</a>;
<b>use</b> <a href="staking_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_staking_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::staking_manager</a>;
<b>use</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::withdrawal_manager</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_entry"></a>

## Function `deposit_entry`

Deposit APT for kAPT
* Accepts APT tokens and mints kAPT tokens to the user's account
*
* @param user: signer: Account depositing APT
* @param apt_amount: u64: Amount of APT to deposit



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_entry">deposit_entry</a>(user: &<a href="">signer</a>, apt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_and_stake_entry"></a>

## Function `deposit_and_stake_entry`

Deposit APT and stake for stkAPT
* Deposits APT for kAPT and immediately stakes it for stkAPT
*
* @param user: signer: Account depositing and staking
* @param apt_amount: u64: Amount of APT to deposit and stake



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_deposit_and_stake_entry">deposit_and_stake_entry</a>(user: &<a href="">signer</a>, apt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_stake_entry"></a>

## Function `stake_entry`

Stake kAPT for stkAPT
* Stakes kAPT tokens to receive stkAPT tokens
*
* @param user: signer: Account staking kAPT
* @param kapt_amount: u64: Amount of kAPT to stake



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_stake_entry">stake_entry</a>(user: &<a href="">signer</a>, kapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_entry"></a>

## Function `unstake_entry`

Unstake stkAPT for kAPT
* Burns stkAPT tokens to receive kAPT tokens
*
* @param user: signer: Account unstaking stkAPT
* @param stkapt_amount: u64: Amount of stkAPT to unstake



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_entry">unstake_entry</a>(user: &<a href="">signer</a>, stkapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_and_request_withdrawal_entry"></a>

## Function `unstake_and_request_withdrawal_entry`

Unstake and request withdrawal
* Unstakes stkAPT and initiates withdrawal request in one transaction
*
* @param user: signer: Account unstaking and withdrawing
* @param stkapt_amount: u64: Amount of stkAPT to unstake and withdraw



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_unstake_and_request_withdrawal_entry">unstake_and_request_withdrawal_entry</a>(user: &<a href="">signer</a>, stkapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_request_withdrawal_entry"></a>

## Function `request_withdrawal_entry`

Request withdrawal of kAPT
* Initiates withdrawal request to convert kAPT back to APT
*
* @param user: signer: Account requesting withdrawal
* @param kapt_amount: u64: Amount of kAPT to withdraw



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_request_withdrawal_entry">request_withdrawal_entry</a>(user: &<a href="">signer</a>, kapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_finalize_withdrawals_entry"></a>

## Function `finalize_withdrawals_entry`

Finalize withdrawal
* Completes withdrawal after unbonding period
*
* @param user: signer: Account finalizing withdrawal
* @param withdrawal_ids: vector<u64>: IDs of withdrawals to finalize



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_finalize_withdrawals_entry">finalize_withdrawals_entry</a>(user: &<a href="">signer</a>, withdrawal_ids: <a href="">vector</a>&lt;u64&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_update_rewards_entry"></a>

## Function `update_rewards_entry`

Update rewards
* Updates exchange rates and distributes validator rewards



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_update_rewards_entry">update_rewards_entry</a>()
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_quote_deposit_entry"></a>

## Function `quote_deposit_entry`

Quote deposit
* Returns the amount of kAPT that would be minted for a given APT amount
*
* @param apt_amount: u64: Amount of APT to quote
* @return u64, u64: Amount of fees, Amount of kAPT that would be minted



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="gateway.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_quote_deposit_entry">quote_deposit_entry</a>(apt_amount: u64): (u64, u64)
</code></pre>
