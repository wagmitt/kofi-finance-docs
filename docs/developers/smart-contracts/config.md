
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config`

Configuration Module
Manages protocol-wide settings including fees, thresholds, and validator configurations.


-  [Resource `GlobalConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GlobalConfig)
-  [Resource `GatewayConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfig)
-  [Struct `GatewayConfigUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfigUpdated)
-  [Resource `StakingConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfig)
-  [Struct `StakingConfigUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfigUpdated)
-  [Resource `ValidatorConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfig)
-  [Struct `ValidatorConfigUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfigUpdated)
-  [Resource `WithdrawalConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfig)
-  [Struct `WithdrawalConfigUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfigUpdated)
-  [Resource `MintingConfig`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfig)
-  [Struct `MintingConfigUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfigUpdated)
-  [Resource `PackageMetadata`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadata)
-  [Struct `PackageMetadataUpdated`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadataUpdated)
-  [Constants](#@Constants_0)
-  [Function `pause_deposits_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_deposits_admin)
-  [Function `unpause_deposits_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_deposits_admin)
-  [Function `pause_stake_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_stake_admin)
-  [Function `unpause_stake_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_stake_admin)
-  [Function `pause_unstake_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_unstake_admin)
-  [Function `unpause_unstake_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_unstake_admin)
-  [Function `pause_withdrawals_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_withdrawals_admin)
-  [Function `unpause_withdrawals_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_withdrawals_admin)
-  [Function `deposits_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_deposits_paused)
-  [Function `stake_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_stake_paused)
-  [Function `unstake_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unstake_paused)
-  [Function `withdrawals_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_withdrawals_paused)
-  [Function `set_min_stake_amount_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_stake_amount_admin)
-  [Function `set_min_unstake_amount_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_unstake_amount_admin)
-  [Function `set_min_active_stake_amount_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_active_stake_amount_admin)
-  [Function `set_management_fee_rate_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_management_fee_rate_admin)
-  [Function `get_min_stake_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_stake_amount)
-  [Function `get_min_unstake_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_unstake_amount)
-  [Function `get_min_active_stake_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_active_stake_amount)
-  [Function `get_min_pending_inactive`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_pending_inactive)
-  [Function `get_management_fee_rate`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_management_fee_rate)
-  [Function `get_initialization_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_initialization_amount)
-  [Function `set_min_mint_amount_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_mint_amount_admin)
-  [Function `get_min_mint_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_mint_amount)
-  [Function `update_validator_config_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_validator_config_admin)
-  [Function `get_validator_addresses`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_addresses)
-  [Function `get_validator_allocations`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_allocations)
-  [Function `set_min_withdrawal_amount_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_withdrawal_amount_admin)
-  [Function `set_withdrawal_period_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_period_admin)
-  [Function `set_withdrawal_fee_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_fee_admin)
-  [Function `get_min_withdrawal_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_withdrawal_amount)
-  [Function `get_withdrawal_period`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_period)
-  [Function `get_withdrawal_fee`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_fee)
-  [Function `get_version_string`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_string)
-  [Function `get_last_upgraded`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_last_upgraded)
-  [Function `update_version_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_version_admin)
-  [Function `get_version_info`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_info)
-  [Function `get_basis_points`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_basis_points)


<pre><code><b>use</b> <a href="">0x1::delegation_pool</a>;
<b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::string</a>;
<b>use</b> <a href="">0x1::timestamp</a>;
<b>use</b> <a href="">0x1::vector</a>;
<b>use</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::access_control</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GlobalConfig"></a>

## Resource `GlobalConfig`

Global configuration
Helper struct to store all configuration values



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GlobalConfig">GlobalConfig</a> <b>has</b> drop, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfig"></a>

## Resource `GatewayConfig`

Gateway configuration
Controls deposit, withdrawal, and staking operations.
@param deposits_paused: bool: Whether deposits are paused
@param stake_paused: bool: Whether staking is paused
@param unstake_paused: bool: Whether unstaking is paused
@param withdrawals_paused: bool: Whether withdrawals are paused



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfig">GatewayConfig</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfigUpdated"></a>

## Struct `GatewayConfigUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_GatewayConfigUpdated">GatewayConfigUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfig"></a>

## Resource `StakingConfig`

Staking configuration
Controls staking parameters and validator settings.

@param min_stake_amount: u64: Minimum amount that can be staked
@param max_delegation_fee: u64: Maximum fee charged for delegation
@param basis_points: u64: Basis points for percentage calculations
@param min_unstake_amount: u64: Minimum amount that can be unstaked
@param min_active_stake_amount: u64: Minimum amount must be actively staked on any delegation pool
@param min_pending_inactive: u64: Minimum pending inactive stake per pool
@param management_fee_rate: u64: Management fee rate in basis points



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfig">StakingConfig</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfigUpdated"></a>

## Struct `StakingConfigUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_StakingConfigUpdated">StakingConfigUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfig"></a>

## Resource `ValidatorConfig`

Validator configuration
Stores validator addresses and allocations.

@param addresses: vector<address>: List of validator addresses
@param allocations: vector<u64>: Stake allocation percentages



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfig">ValidatorConfig</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfigUpdated"></a>

## Struct `ValidatorConfigUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_ValidatorConfigUpdated">ValidatorConfigUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfig"></a>

## Resource `WithdrawalConfig`

Withdrawal configuration
Controls withdrawal process parameters.

@param min_withdrawal_amount: u64: Minimum amount that can be withdrawn
@param withdrawal_period: u64: Required withdrawal period in seconds
@param withdrawal_fee: u64: Withdrawal fee percentage



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfig">WithdrawalConfig</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfigUpdated"></a>

## Struct `WithdrawalConfigUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_WithdrawalConfigUpdated">WithdrawalConfigUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfig"></a>

## Resource `MintingConfig`

Minting configuration
Controls minting parameters.

@param min_mint_amount: u64: Minimum amount that can be minted



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfig">MintingConfig</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfigUpdated"></a>

## Struct `MintingConfigUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_MintingConfigUpdated">MintingConfigUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadata"></a>

## Resource `PackageMetadata`

Package metadata
Tracks version information.

@param major: u64: Major version number
@param minor: u64: Minor version number
@param patch: u64: Patch version number
@param version_string: String: String representation of version
@param last_upgraded: u64: Timestamp of last upgrade



<pre><code><b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadata">PackageMetadata</a> <b>has</b> <b>copy</b>, drop, store, key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadataUpdated"></a>

## Struct `PackageMetadataUpdated`



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_PackageMetadataUpdated">PackageMetadataUpdated</a> <b>has</b> drop, store
</code></pre>



<a id="@Constants_0"></a>

## Constants


<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_BASIS_POINTS"></a>

100% in basis points


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_BASIS_POINTS">DEFAULT_BASIS_POINTS</a>: u64 = 10000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_CLAIM_INTERVAL"></a>

Claim interval in seconds


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_CLAIM_INTERVAL">DEFAULT_CLAIM_INTERVAL</a>: u64 = 3600;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_INITIALIZATION_AMOUNT"></a>

Initialization amount


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_INITIALIZATION_AMOUNT">DEFAULT_INITIALIZATION_AMOUNT</a>: u64 = 2500000000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MANAGEMENT_FEE_RATE"></a>

Management fee rate


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MANAGEMENT_FEE_RATE">DEFAULT_MANAGEMENT_FEE_RATE</a>: u64 = 100;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MAX_CLAIM_AMOUNT"></a>

Maximum claim amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MAX_CLAIM_AMOUNT">DEFAULT_MAX_CLAIM_AMOUNT</a>: u64 = 1;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_ACTIVE_STAKE_AMOUNT"></a>

Minimum active stake amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_ACTIVE_STAKE_AMOUNT">DEFAULT_MIN_ACTIVE_STAKE_AMOUNT</a>: u64 = 1400000000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_MINT_AMOUNT"></a>

Minimum mint amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_MINT_AMOUNT">DEFAULT_MIN_MINT_AMOUNT</a>: u64 = 10000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_PENDING_INACTIVE_AMOUNT"></a>

Minimum pending inactive amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_PENDING_INACTIVE_AMOUNT">DEFAULT_MIN_PENDING_INACTIVE_AMOUNT</a>: u64 = 1100000000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_STAKE_AMOUNT"></a>

Minimum stake amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_STAKE_AMOUNT">DEFAULT_MIN_STAKE_AMOUNT</a>: u64 = 1000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_UNSTAKE_AMOUNT"></a>

Minimum unstake amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_UNSTAKE_AMOUNT">DEFAULT_MIN_UNSTAKE_AMOUNT</a>: u64 = 1;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_WITHDRAWAL_AMOUNT"></a>

Minimum withdrawal amount in APT


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_MIN_WITHDRAWAL_AMOUNT">DEFAULT_MIN_WITHDRAWAL_AMOUNT</a>: u64 = 1;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_WITHDRAWAL_FEE"></a>

Withdrawal fee in basis points


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_WITHDRAWAL_FEE">DEFAULT_WITHDRAWAL_FEE</a>: u64 = 0;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_WITHDRAWAL_PERIOD"></a>

Withdrawal period in seconds


<pre><code><b>const</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_DEFAULT_WITHDRAWAL_PERIOD">DEFAULT_WITHDRAWAL_PERIOD</a>: u64 = 1209600;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_deposits_admin"></a>

## Function `pause_deposits_admin`

Pause deposits
Pauses deposit functionality.

@param admin: signer: Admin account pausing deposits



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_deposits_admin">pause_deposits_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_deposits_admin"></a>

## Function `unpause_deposits_admin`

Unpause deposits
Resumes deposit functionality.

@param admin: signer: Admin account unpausing deposits



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_deposits_admin">unpause_deposits_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_stake_admin"></a>

## Function `pause_stake_admin`

Pause staking
Pauses staking functionality.

@param admin: signer: Admin account pausing staking



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_stake_admin">pause_stake_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_stake_admin"></a>

## Function `unpause_stake_admin`

Unpause staking
Resumes staking functionality.

@param admin: signer: Admin account unpausing staking



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_stake_admin">unpause_stake_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_unstake_admin"></a>

## Function `pause_unstake_admin`

Pause unstaking
Pauses unstaking functionality.

@param admin: signer: Admin account pausing unstaking



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_unstake_admin">pause_unstake_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_unstake_admin"></a>

## Function `unpause_unstake_admin`

Unpause unstaking
Resumes unstaking functionality.

@param admin: signer: Admin account unpausing unstaking



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_unstake_admin">unpause_unstake_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_withdrawals_admin"></a>

## Function `pause_withdrawals_admin`

Pause withdrawals
Pauses withdrawal functionality.

@param admin: signer: Admin account pausing withdrawals



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_pause_withdrawals_admin">pause_withdrawals_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_withdrawals_admin"></a>

## Function `unpause_withdrawals_admin`

Unpause withdrawals
Resumes withdrawal functionality.

@param admin: signer: Admin account unpausing withdrawals



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unpause_withdrawals_admin">unpause_withdrawals_admin</a>(admin: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_deposits_paused"></a>

## Function `deposits_paused`

Check if deposits are paused
Returns whether deposits are currently paused.

@return bool: True if deposits are paused



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_deposits_paused">deposits_paused</a>(): bool
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_stake_paused"></a>

## Function `stake_paused`

Check if staking is paused
Returns whether staking is currently paused.

@return bool: True if staking is paused



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_stake_paused">stake_paused</a>(): bool
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unstake_paused"></a>

## Function `unstake_paused`

Check if unstaking is paused
Returns whether unstaking is currently paused.

@return bool: True if unstaking is paused



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_unstake_paused">unstake_paused</a>(): bool
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_withdrawals_paused"></a>

## Function `withdrawals_paused`

Check if withdrawals are paused
Returns whether withdrawals are currently paused.

@return bool: True if withdrawals are paused



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_withdrawals_paused">withdrawals_paused</a>(): bool
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_stake_amount_admin"></a>

## Function `set_min_stake_amount_admin`

Set minimum stake amount
Updates the minimum amount required for staking.

@param admin: signer: Admin account setting the amount
@param amount: u64: New minimum stake amount



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_stake_amount_admin">set_min_stake_amount_admin</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_unstake_amount_admin"></a>

## Function `set_min_unstake_amount_admin`

Set minimum unstake amount
Updates the minimum amount required to unstake.

@param admin: signer: Admin account setting the amount
@param amount: u64: New minimum unstake amount



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_unstake_amount_admin">set_min_unstake_amount_admin</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_active_stake_amount_admin"></a>

## Function `set_min_active_stake_amount_admin`

Set minimum active stake amount
Updates the minimum amount required active stake on any delegation pool.

@param admin: signer: Admin account setting the amount
@param amount: u64: New minimum active stake amount



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_active_stake_amount_admin">set_min_active_stake_amount_admin</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_management_fee_rate_admin"></a>

## Function `set_management_fee_rate_admin`

Set management fee rate
Updates the management fee rate charged on rewards.

@param admin: signer: Admin account setting the fee
@param rate: u64: New management fee rate in basis points



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_management_fee_rate_admin">set_management_fee_rate_admin</a>(admin: &<a href="">signer</a>, rate: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_stake_amount"></a>

## Function `get_min_stake_amount`

Get minimum stake amount
Returns the minimum amount required for staking.

@return u64: Minimum stake amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_stake_amount">get_min_stake_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_unstake_amount"></a>

## Function `get_min_unstake_amount`

Get minimum unstake amount
Returns the minimum amount that can be unstaked.

@return u64: Minimum unstake amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_unstake_amount">get_min_unstake_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_active_stake_amount"></a>

## Function `get_min_active_stake_amount`

Get minimum active stake amount
Returns the minimum amount that must be active on any delegation pool.

@return u64: Minimum active stake amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_active_stake_amount">get_min_active_stake_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_pending_inactive"></a>

## Function `get_min_pending_inactive`

Get minimum pending inactive amount
Returns the minimum amount of pending inactive stake per pool.

@return u64: Minimum pending inactive amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_pending_inactive">get_min_pending_inactive</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_management_fee_rate"></a>

## Function `get_management_fee_rate`

Get management fee rate
Returns the current management fee rate.

@return u64: Management fee rate in basis points



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_management_fee_rate">get_management_fee_rate</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_initialization_amount"></a>

## Function `get_initialization_amount`

Get initialization amount
Returns the amount of APT required to initialize a validator.

@return u64: Initialization amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_initialization_amount">get_initialization_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_mint_amount_admin"></a>

## Function `set_min_mint_amount_admin`

Set minimum mint amount
Updates the minimum amount required for minting.

@param admin: signer: Admin account setting the amount
@param amount: u64: New minimum mint amount



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_mint_amount_admin">set_min_mint_amount_admin</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_mint_amount"></a>

## Function `get_min_mint_amount`

Get minimum mint amount
Returns the minimum amount required for minting.

@return u64: Minimum mint amount



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_mint_amount">get_min_mint_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_validator_config_admin"></a>

## Function `update_validator_config_admin`

Update validator configuration
Updates delegation pool addresses and stake allocations.

@param admin: signer: Admin account updating the config
@param addresses: vector<address>: List of delegation pool addresses
@param allocations: vector<u64>: List of stake allocations



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_validator_config_admin">update_validator_config_admin</a>(admin: &<a href="">signer</a>, addresses: <a href="">vector</a>&lt;<b>address</b>&gt;, allocations: <a href="">vector</a>&lt;u64&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_addresses"></a>

## Function `get_validator_addresses`

Get validator addresses
*
* Returns the current set of validator addresses.
*
* Returns:
* * <code><a href="">vector</a>&lt;<b>address</b>&gt;</code> - Vector of validator addresses



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_addresses">get_validator_addresses</a>(): <a href="">vector</a>&lt;<b>address</b>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_allocations"></a>

## Function `get_validator_allocations`

Get validator allocations
*
* Returns the current set of validator allocations.
*
* Returns:
* * <code><a href="">vector</a>&lt;u64&gt;</code> - Vector of validator allocations in basis points



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_validator_allocations">get_validator_allocations</a>(): <a href="">vector</a>&lt;u64&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_withdrawal_amount_admin"></a>

## Function `set_min_withdrawal_amount_admin`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_min_withdrawal_amount_admin">set_min_withdrawal_amount_admin</a>(admin: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_period_admin"></a>

## Function `set_withdrawal_period_admin`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_period_admin">set_withdrawal_period_admin</a>(admin: &<a href="">signer</a>, period: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_fee_admin"></a>

## Function `set_withdrawal_fee_admin`



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_set_withdrawal_fee_admin">set_withdrawal_fee_admin</a>(admin: &<a href="">signer</a>, fee: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_withdrawal_amount"></a>

## Function `get_min_withdrawal_amount`



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_min_withdrawal_amount">get_min_withdrawal_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_period"></a>

## Function `get_withdrawal_period`



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_period">get_withdrawal_period</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_fee"></a>

## Function `get_withdrawal_fee`



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_withdrawal_fee">get_withdrawal_fee</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_string"></a>

## Function `get_version_string`

Get version string
Returns the current version string.

@return String: Current version string



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_string">get_version_string</a>(): <a href="_String">string::String</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_last_upgraded"></a>

## Function `get_last_upgraded`

Get last upgrade time
Returns the timestamp of the last upgrade.

@return u64: Last upgrade timestamp in microseconds



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_last_upgraded">get_last_upgraded</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_version_admin"></a>

## Function `update_version_admin`

Update version
Updates the package version numbers.

@param admin: signer: Admin account updating the version
@param major: u64: New major version number
@param minor: u64: New minor version number
@param patch: u64: New patch version number



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_update_version_admin">update_version_admin</a>(admin: &<a href="">signer</a>, major: u64, minor: u64, patch: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_info"></a>

## Function `get_version_info`



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_version_info">get_version_info</a>(): (u64, u64, u64, u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_basis_points"></a>

## Function `get_basis_points`

Get basis points configuration
*
* Returns the basis points value used for percentage calculations.
*
* Returns:
* * <code>u64</code> - Basis points value (100% = 10000)



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config_get_basis_points">get_basis_points</a>(): u64
</code></pre>
