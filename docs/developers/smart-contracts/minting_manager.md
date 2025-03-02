
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::minting_manager`

Minting Manager Module
Manages APT deposits and kAPT token minting
Friend modules: withdrawal_manager, gateway


-  [Resource `MintingFees`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintingFees)
-  [Struct `MintEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintEvent)
-  [Struct `WithdrawFeesEvent`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_WithdrawFeesEvent)
-  [Function `mint`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_mint)
-  [Function `withdraw_fees_admin`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_withdraw_fees_admin)
-  [Function `get_minting_fees`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_get_minting_fees)


<pre><code><b>use</b> <a href="">0x1::aptos_coin</a>;
<b>use</b> <a href="">0x1::coin</a>;
<b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::vector</a>;
<b>use</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::access_control</a>;
<b>use</b> <a href="config.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_config">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::config</a>;
<b>use</b> <a href="delegation_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_delegation_manager">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::delegation_manager</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintingFees"></a>

## Resource `MintingFees`

Tracks total minting fees collected


<pre><code><b>struct</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintingFees">MintingFees</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintEvent"></a>

## Struct `MintEvent`

Event emitted when kAPT tokens are minted


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_MintEvent">MintEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_WithdrawFeesEvent"></a>

## Struct `WithdrawFeesEvent`

Event emitted when minting fees are withdrawn


<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_WithdrawFeesEvent">WithdrawFeesEvent</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_mint"></a>

## Function `mint`

Mint kAPT tokens
* Accepts APT deposit and mints equivalent kAPT tokens
*
* @param user: signer: Account depositing APT
* @param amount: u64: Amount of APT to deposit
* @return (u64, u64): (fees charged, kAPT amount minted)



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_mint">mint</a>(user: &<a href="">signer</a>, amount: u64): (u64, u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_withdraw_fees_admin"></a>

## Function `withdraw_fees_admin`

Withdraw minting fees
* Withdraws collected minting fees to specified recipient
* Only callable by admin
*
* @param admin: &signer: Admin account withdrawing fees
* @param recipient: address: Address to receive fees
* @param amount: u64: Amount of fees to withdraw



<pre><code><b>public</b> entry <b>fun</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_withdraw_fees_admin">withdraw_fees_admin</a>(admin: &<a href="">signer</a>, recipient: <b>address</b>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_get_minting_fees"></a>

## Function `get_minting_fees`

Get total minting fees
* Returns total amount of minting fees collected
*
* @return u64: Total fees collected



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="minting_manager.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_minting_manager_get_minting_fees">get_minting_fees</a>(): u64
</code></pre>
