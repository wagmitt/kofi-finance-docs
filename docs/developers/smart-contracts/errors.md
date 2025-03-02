
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors`



-  [Constants](#@Constants_0)
-  [Function `not_authorized`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_authorized)
-  [Function `invalid_config`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_config)
-  [Function `invalid_allocation`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_allocation)
-  [Function `invalid_total_allocation`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_total_allocation)
-  [Function `no_delegation_pool`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_delegation_pool)
-  [Function `insufficient_stake`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_stake)
-  [Function `insufficient_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_balance)
-  [Function `invalid_amount`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_amount)
-  [Function `invalid_state`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_state)
-  [Function `already_initialized`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_already_initialized)
-  [Function `withdrawal_not_ready`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawal_not_ready)
-  [Function `ticket_not_found`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ticket_not_found)
-  [Function `not_owner`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_owner)
-  [Function `insufficient_unstake`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_unstake)
-  [Function `insufficient_deposit`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_deposit)
-  [Function `no_validator_available`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_validator_available)
-  [Function `stake_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_stake_paused)
-  [Function `unstake_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_unstake_paused)
-  [Function `withdrawals_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawals_paused)
-  [Function `total_staked_less_than_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_total_staked_less_than_kapt)
-  [Function `deposit_paused`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_deposit_paused)
-  [Function `insufficient_fees`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_fees)


<pre><code><b>use</b> <a href="">0x1::error</a>;
</code></pre>



<a id="@Constants_0"></a>

## Constants


<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_BALANCE"></a>

Insufficient balance


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_BALANCE">EINSUFFICIENT_BALANCE</a>: u64 = 8;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENOT_AUTHORIZED"></a>

Not authorized to perform operation


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENOT_AUTHORIZED">ENOT_AUTHORIZED</a>: u64 = 1;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_CONFIG"></a>

Invalid configuration value


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_CONFIG">EINVALID_CONFIG</a>: u64 = 2;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENOT_OWNER"></a>

Not owner


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENOT_OWNER">ENOT_OWNER</a>: u64 = 19;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EALREADY_INITIALIZED"></a>

Already initialized


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EALREADY_INITIALIZED">EALREADY_INITIALIZED</a>: u64 = 29;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EDEPOSIT_PAUSED"></a>

Deposit is paused


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EDEPOSIT_PAUSED">EDEPOSIT_PAUSED</a>: u64 = 28;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_DEPOSIT"></a>

Insufficient deposit amount


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_DEPOSIT">EINSUFFICIENT_DEPOSIT</a>: u64 = 21;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_FEES"></a>

Insufficient fees available for withdrawal


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_FEES">EINSUFFICIENT_FEES</a>: u64 = 31;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_PENDING_INACTIVE"></a>

Insufficient pending inactive stake


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_PENDING_INACTIVE">EINSUFFICIENT_PENDING_INACTIVE</a>: u64 = 6;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_STAKE"></a>

Insufficient stake amount


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_STAKE">EINSUFFICIENT_STAKE</a>: u64 = 7;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_UNSTAKE"></a>

Insufficient unstake amount


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINSUFFICIENT_UNSTAKE">EINSUFFICIENT_UNSTAKE</a>: u64 = 20;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_ALLOCATION"></a>

Invalid allocation


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_ALLOCATION">EINVALID_ALLOCATION</a>: u64 = 3;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_AMOUNT"></a>

Invalid amount


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_AMOUNT">EINVALID_AMOUNT</a>: u64 = 9;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_STATE"></a>

Invalid state


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_STATE">EINVALID_STATE</a>: u64 = 10;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_TOTAL_ALLOCATION"></a>

Total allocation must be 100%


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EINVALID_TOTAL_ALLOCATION">EINVALID_TOTAL_ALLOCATION</a>: u64 = 4;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENO_DELEGATION_POOL"></a>

Delegation pool not found


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENO_DELEGATION_POOL">ENO_DELEGATION_POOL</a>: u64 = 5;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENO_VALIDATOR_AVAILABLE"></a>

No validator available for staking


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ENO_VALIDATOR_AVAILABLE">ENO_VALIDATOR_AVAILABLE</a>: u64 = 22;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ESTAKE_PAUSED"></a>

Staking is paused


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ESTAKE_PAUSED">ESTAKE_PAUSED</a>: u64 = 24;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ETICKET_NOT_FOUND"></a>

Ticket not found


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ETICKET_NOT_FOUND">ETICKET_NOT_FOUND</a>: u64 = 15;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ETOTAL_STAKED_LESS_THAN_KAPT"></a>

Total staked APT is less than total kAPT


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ETOTAL_STAKED_LESS_THAN_KAPT">ETOTAL_STAKED_LESS_THAN_KAPT</a>: u64 = 27;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EUNSTAKE_PAUSED"></a>

Unstaking is paused


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EUNSTAKE_PAUSED">EUNSTAKE_PAUSED</a>: u64 = 25;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EWITHDRAWALS_PAUSED"></a>

Withdrawals are paused


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EWITHDRAWALS_PAUSED">EWITHDRAWALS_PAUSED</a>: u64 = 26;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EWITHDRAWAL_NOT_READY"></a>

Withdrawal not ready


<pre><code><b>const</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_EWITHDRAWAL_NOT_READY">EWITHDRAWAL_NOT_READY</a>: u64 = 12;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_authorized"></a>

## Function `not_authorized`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_authorized">not_authorized</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_config"></a>

## Function `invalid_config`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_config">invalid_config</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_allocation"></a>

## Function `invalid_allocation`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_allocation">invalid_allocation</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_total_allocation"></a>

## Function `invalid_total_allocation`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_total_allocation">invalid_total_allocation</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_delegation_pool"></a>

## Function `no_delegation_pool`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_delegation_pool">no_delegation_pool</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_stake"></a>

## Function `insufficient_stake`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_stake">insufficient_stake</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_balance"></a>

## Function `insufficient_balance`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_balance">insufficient_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_amount"></a>

## Function `invalid_amount`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_amount">invalid_amount</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_state"></a>

## Function `invalid_state`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_invalid_state">invalid_state</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_already_initialized"></a>

## Function `already_initialized`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_already_initialized">already_initialized</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawal_not_ready"></a>

## Function `withdrawal_not_ready`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawal_not_ready">withdrawal_not_ready</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ticket_not_found"></a>

## Function `ticket_not_found`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_ticket_not_found">ticket_not_found</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_owner"></a>

## Function `not_owner`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_not_owner">not_owner</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_unstake"></a>

## Function `insufficient_unstake`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_unstake">insufficient_unstake</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_deposit"></a>

## Function `insufficient_deposit`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_deposit">insufficient_deposit</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_validator_available"></a>

## Function `no_validator_available`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_no_validator_available">no_validator_available</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_stake_paused"></a>

## Function `stake_paused`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_stake_paused">stake_paused</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_unstake_paused"></a>

## Function `unstake_paused`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_unstake_paused">unstake_paused</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawals_paused"></a>

## Function `withdrawals_paused`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_withdrawals_paused">withdrawals_paused</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_total_staked_less_than_kapt"></a>

## Function `total_staked_less_than_kapt`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_total_staked_less_than_kapt">total_staked_less_than_kapt</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_deposit_paused"></a>

## Function `deposit_paused`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_deposit_paused">deposit_paused</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_fees"></a>

## Function `insufficient_fees`



<pre><code><b>public</b> <b>fun</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors_insufficient_fees">insufficient_fees</a>(): u64
</code></pre>
