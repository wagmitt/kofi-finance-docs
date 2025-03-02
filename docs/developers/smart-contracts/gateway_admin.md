
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::gateway_admin`


* Gateway Admin Module
*
* Centralizes all admin functions for the protocol.
* Provides entry points for admin operations.


-  [Function `pause_deposits_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_deposits_admin_entry)
-  [Function `unpause_deposits_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_deposits_admin_entry)
-  [Function `pause_stake_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_stake_admin_entry)
-  [Function `unpause_stake_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_stake_admin_entry)
-  [Function `pause_unstake_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_unstake_admin_entry)
-  [Function `unpause_unstake_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_unstake_admin_entry)
-  [Function `pause_withdrawals_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_withdrawals_admin_entry)
-  [Function `unpause_withdrawals_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_withdrawals_admin_entry)
-  [Function `set_min_stake_amount_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_stake_amount_admin_entry)
-  [Function `set_min_active_stake_amount_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_active_stake_amount_admin_entry)
-  [Function `set_min_unstake_amount_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_unstake_amount_admin_entry)
-  [Function `set_management_fee_rate_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_management_fee_rate_admin_entry)
-  [Function `set_min_mint_amount_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_mint_amount_admin_entry)
-  [Function `set_min_withdrawal_amount_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_withdrawal_amount_admin_entry)
-  [Function `set_withdrawal_period_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_period_admin_entry)
-  [Function `set_withdrawal_fee_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_fee_admin_entry)
-  [Function `update_version_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_version_admin_entry)
-  [Function `update_validator_config_admin_entry`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_validator_config_admin_entry)


<pre><code><b>use</b> <a href="">0x1::aptos_coin</a>;
<b>use</b> <a href="">0x1::coin</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::delegation_manager</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_deposits_admin_entry"></a>

## Function `pause_deposits_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_deposits_admin_entry">pause_deposits_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_deposits_admin_entry"></a>

## Function `unpause_deposits_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_deposits_admin_entry">unpause_deposits_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_stake_admin_entry"></a>

## Function `pause_stake_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_stake_admin_entry">pause_stake_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_stake_admin_entry"></a>

## Function `unpause_stake_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_stake_admin_entry">unpause_stake_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_unstake_admin_entry"></a>

## Function `pause_unstake_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_unstake_admin_entry">pause_unstake_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_unstake_admin_entry"></a>

## Function `unpause_unstake_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_unstake_admin_entry">unpause_unstake_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_withdrawals_admin_entry"></a>

## Function `pause_withdrawals_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_pause_withdrawals_admin_entry">pause_withdrawals_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_withdrawals_admin_entry"></a>

## Function `unpause_withdrawals_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_unpause_withdrawals_admin_entry">unpause_withdrawals_admin_entry</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_stake_amount_admin_entry"></a>

## Function `set_min_stake_amount_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_stake_amount_admin_entry">set_min_stake_amount_admin_entry</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_active_stake_amount_admin_entry"></a>

## Function `set_min_active_stake_amount_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_active_stake_amount_admin_entry">set_min_active_stake_amount_admin_entry</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_unstake_amount_admin_entry"></a>

## Function `set_min_unstake_amount_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_unstake_amount_admin_entry">set_min_unstake_amount_admin_entry</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_management_fee_rate_admin_entry"></a>

## Function `set_management_fee_rate_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_management_fee_rate_admin_entry">set_management_fee_rate_admin_entry</a>(admin: &<a href="">signer</a>, rate: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_mint_amount_admin_entry"></a>

## Function `set_min_mint_amount_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_mint_amount_admin_entry">set_min_mint_amount_admin_entry</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_withdrawal_amount_admin_entry"></a>

## Function `set_min_withdrawal_amount_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_min_withdrawal_amount_admin_entry">set_min_withdrawal_amount_admin_entry</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_period_admin_entry"></a>

## Function `set_withdrawal_period_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_period_admin_entry">set_withdrawal_period_admin_entry</a>(admin: &<a href="">signer</a>, period: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_fee_admin_entry"></a>

## Function `set_withdrawal_fee_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_set_withdrawal_fee_admin_entry">set_withdrawal_fee_admin_entry</a>(admin: &<a href="">signer</a>, fee: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_version_admin_entry"></a>

## Function `update_version_admin_entry`



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_version_admin_entry">update_version_admin_entry</a>(admin: &<a href="">signer</a>, major: u64, minor: u64, patch: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_validator_config_admin_entry"></a>

## Function `update_validator_config_admin_entry`

Update validator configuration
Updates the validator addresses and their stake allocations.

@param admin: &signer: Admin signer
@param addresses: vector<address>: List of validator addresses
@param allocations: vector<u64>: List of stake allocations in basis points (100% = 10000)



<pre><code><b>public</b> entry <b>fun</b> <a href="gateway_admin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_gateway_admin_update_validator_config_admin_entry">update_validator_config_admin_entry</a>(admin: &<a href="">signer</a>, addresses: <a href="">vector</a>&lt;<b>address</b>&gt;, allocations: <a href="">vector</a>&lt;u64&gt;)
</code></pre>
