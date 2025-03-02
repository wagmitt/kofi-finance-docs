
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::delegation_manager`

Delegation Manager Module
Manages APT delegation to validators through delegation pools.
Features:
* * Staking APT and minting kAPT tokens
* * Unstaking APT and burning kAPT tokens
* * Validator selection and management
* * Delegation pool integration
* * Reactivating inactive stake
* * Withdrawing unlocked stake
*
* Core Responsibilities:
* * Manages delegation of APT to validator pools
* * Handles undelegation of APT from validator pools
* * Reactivates inactive stake when needed
* * Withdraws unlocked stake from pools
* * Tracks validator status and stake distribution
* * Emits events for delegation operations


-  [Struct `DelegateEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegateEvent)
-  [Struct `UndelegateEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_UndelegateEvent)
-  [Struct `DelegationPoolStatus`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegationPoolStatus)
-  [Function `delegate_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_delegate_apt)
-  [Function `undelegate_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_undelegate_apt)
-  [Function `withdraw_stake`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_withdraw_stake)
-  [Function `ensure_minimum_amount_to_delegate`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amount_to_delegate)
-  [Function `ensure_minimum_pending_inactive`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_pending_inactive)
-  [Function `ensure_minimum_amounts_from_buffer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amounts_from_buffer)
-  [Function `get_validator_status_length`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_length)
-  [Function `get_validator_status_active_stake_at`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_active_stake_at)
-  [Function `get_validator_status_inactive_stake_at`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_inactive_stake_at)
-  [Function `get_validator_status_pending_inactive_stake_at`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pending_inactive_stake_at)
-  [Function `get_validator_status_pool_address_at`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pool_address_at)
-  [Function `get_validator_status`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status)
-  [Function `get_current_allocations`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_current_allocations)
-  [Function `quote_delegation`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_quote_delegation)


<pre><code><b>use</b> <a href="">0x1::aptos_coin</a>;
<b>use</b> <a href="">0x1::coin</a>;
<b>use</b> <a href="">0x1::delegation_pool</a>;
<b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::stake</a>;
<b>use</b> <a href="">0x1::timestamp</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegateEvent"></a>

## Struct `DelegateEvent`

Emitted when APT is delegated to a validator.


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegateEvent">DelegateEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_UndelegateEvent"></a>

## Struct `UndelegateEvent`

Emitted when APT is undelegated from a validator.


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_UndelegateEvent">UndelegateEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegationPoolStatus"></a>

## Struct `DelegationPoolStatus`

Status information for a delegation pool including stake amounts.

@param pool_address: address: Address of the delegation pool
@param active_stake: u64: Amount of active stake
@param inactive_stake: u64: Amount of inactive stake
@param pending_inactive_stake: u64: Amount of pending inactive stake



<pre><code><b>struct</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegationPoolStatus">DelegationPoolStatus</a> <b>has</b> <b>copy</b>, drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_delegate_apt"></a>

## Function `delegate_apt`

Delegates APT to validators' delegation pools according to allocations.

@param amount: u64: Total amount of APT to delegate
@return (u64, u64): Tuple of (total fees, net amount delegated)



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_delegate_apt">delegate_apt</a>(amount: u64): (u64, u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_undelegate_apt"></a>

## Function `undelegate_apt`

Undelegate APT
Undelegates APT from validators' delegation pools according to allocations.

@param amount: u64: Total amount of APT to undelegate



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_undelegate_apt">undelegate_apt</a>(amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_withdraw_stake"></a>

## Function `withdraw_stake`

Withdraws all inactive stake from validators' delegation pools.



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_withdraw_stake">withdraw_stake</a>()
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amount_to_delegate"></a>

## Function `ensure_minimum_amount_to_delegate`

Ensures minimum APT is staked on a delegation pool.

@param admin: signer: Admin account providing the minimum stake
@param delegation_pool_address: address: Address of the delegation pool



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amount_to_delegate">ensure_minimum_amount_to_delegate</a>(admin: &<a href="">signer</a>, delegation_pool_address: <b>address</b>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_pending_inactive"></a>

## Function `ensure_minimum_pending_inactive`

Ensures minimum pending inactive stake for a validator's delegation pool.

@param admin: signer: Admin account managing the stake
@param pool_address: address: Address of the delegation pool
@return u64: Amount of APT to unlock



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_pending_inactive">ensure_minimum_pending_inactive</a>(admin: &<a href="">signer</a>, pool_address: <b>address</b>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amounts_from_buffer"></a>

## Function `ensure_minimum_amounts_from_buffer`

Ensure minimum amounts from buffer
Uses APT from buffer vault to ensure minimum active and pending inactive stake

@param pool_address: address: Address of the delegation pool



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_ensure_minimum_amounts_from_buffer">ensure_minimum_amounts_from_buffer</a>(pool_address: <b>address</b>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_length"></a>

## Function `get_validator_status_length`

Get validator status length
Returns the number of validators with status information.

@return u64: Number of validators



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_length">get_validator_status_length</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_active_stake_at"></a>

## Function `get_validator_status_active_stake_at`

Get validator active stake
Returns the active stake amount for a validator at the given index.

@param index: u64: Index of the validator
@return u64: Amount of active stake



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_active_stake_at">get_validator_status_active_stake_at</a>(index: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_inactive_stake_at"></a>

## Function `get_validator_status_inactive_stake_at`

Get validator inactive stake
Returns the inactive stake amount for a validator at the given index.

@param index: u64: Index of the validator
@return u64: Amount of inactive stake



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_inactive_stake_at">get_validator_status_inactive_stake_at</a>(index: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pending_inactive_stake_at"></a>

## Function `get_validator_status_pending_inactive_stake_at`

Get validator pending inactive stake
Returns the pending inactive stake amount for a validator at the given index.

@param index: u64: Index of the validator
@return u64: Amount of pending inactive stake



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pending_inactive_stake_at">get_validator_status_pending_inactive_stake_at</a>(index: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pool_address_at"></a>

## Function `get_validator_status_pool_address_at`

Get validator address
Returns the pool address for a validator at the given index.

@param index: u64: Index of the validator
@return address: Validator's pool address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status_pool_address_at">get_validator_status_pool_address_at</a>(index: u64): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status"></a>

## Function `get_validator_status`

Get validator status
Returns status information for all validators.

@return vector<DelegationPoolStatus>: List of validator status information



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_validator_status">get_validator_status</a>(): <a href="">vector</a>&lt;<a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_DelegationPoolStatus">delegation_manager::DelegationPoolStatus</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_current_allocations"></a>

## Function `get_current_allocations`

Get current allocations
Returns current stake allocation percentages for validators.

@return vector<u64>: Vector of current allocations in basis points



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_get_current_allocations">get_current_allocations</a>(): <a href="">vector</a>&lt;u64&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_quote_delegation"></a>

## Function `quote_delegation`

Quote delegation
Returns the amount of kAPT that would be minted for a given APT amount

@param amount: u64: Amount of APT to quote
@return u64, u64: Amount of fees, Amount of kAPT that would be minted



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager_quote_delegation">quote_delegation</a>(amount: u64): (u64, u64)
</code></pre>
