
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::withdrawal_manager`

Withdrawal Manager Module
Handles withdrawal requests for converting kAPT back to APT


-  [Struct `WithdrawalTicket`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalTicket)
-  [Resource `Withdrawals`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_Withdrawals)
-  [Struct `WithdrawalRequestEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalRequestEvent)
-  [Struct `WithdrawalFinalizedEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalFinalizedEvent)
-  [Function `finalize_withdrawals`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_finalize_withdrawals)
-  [Function `request_withdrawal`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_request_withdrawal)
-  [Function `get_withdrawal_info`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_withdrawal_info)
-  [Function `get_user_tickets`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_user_tickets)


<pre><code><b>use</b> <a href="">0x1::aptos_coin</a>;
<b>use</b> <a href="">0x1::coin</a>;
<b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::fungible_asset</a>;
<b>use</b> <a href="">0x1::object</a>;
<b>use</b> <a href="">0x1::primary_fungible_store</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::smart_table</a>;
<b>use</b> <a href="">0x1::timestamp</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::delegation_manager</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalTicket"></a>

## Struct `WithdrawalTicket`

Tracks a pending withdrawal request


<pre><code><b>struct</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalTicket">WithdrawalTicket</a> <b>has</b> <b>copy</b>, drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_Withdrawals"></a>

## Resource `Withdrawals`

Stores all pending withdrawals


<pre><code><b>struct</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_Withdrawals">Withdrawals</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalRequestEvent"></a>

## Struct `WithdrawalRequestEvent`

Event emitted when withdrawal request is created


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalRequestEvent">WithdrawalRequestEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalFinalizedEvent"></a>

## Struct `WithdrawalFinalizedEvent`

Event emitted when withdrawal is completed


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalFinalizedEvent">WithdrawalFinalizedEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_finalize_withdrawals"></a>

## Function `finalize_withdrawals`

Finalize withdrawal
* Completes withdrawal after unbonding period
*
* @param user: signer: Account finalizing withdrawal
* @param withdrawal_ids: vector<u64>: IDs of withdrawals to finalize



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_finalize_withdrawals">finalize_withdrawals</a>(user: &<a href="">signer</a>, withdrawal_ids: <a href="">vector</a>&lt;u64&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_request_withdrawal"></a>

## Function `request_withdrawal`

Request withdrawal
* Creates withdrawal request for converting kAPT to APT
*
* @param user: signer: Account requesting withdrawal
* @param kapt_amount: u64: Amount of kAPT to withdraw



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_request_withdrawal">request_withdrawal</a>(user: &<a href="">signer</a>, kapt_amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_withdrawal_info"></a>

## Function `get_withdrawal_info`

Get withdrawal info
* Returns information about a pending withdrawal
*
* @param user: address: User address
* @param withdrawal_id: u64: ID of withdrawal to query
* @return WithdrawalTicket: Withdrawal information



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_withdrawal_info">get_withdrawal_info</a>(user: <b>address</b>, withdrawal_id: u64): <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalTicket">withdrawal_manager::WithdrawalTicket</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_user_tickets"></a>

## Function `get_user_tickets`

Get user withdrawal tickets
* Returns all withdrawal tickets owned by user
* Fallback to query user's withdrawal tickets if indexer is not available
*
* @param user_addr: address: Account to get tickets for
* @return vector<WithdrawalTicket>: List of user's withdrawal tickets



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_get_user_tickets">get_user_tickets</a>(user_addr: <b>address</b>): <a href="">vector</a>&lt;<a href="withdrawal_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_withdrawal_manager_WithdrawalTicket">withdrawal_manager::WithdrawalTicket</a>&gt;
</code></pre>
