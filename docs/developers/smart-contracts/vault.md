
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::vault`


* Vault Module
*
* Manages shared resource accounts for secure token operations.
* Provides controlled access to APT and kAPT token vaults.


-  [Resource `VaultCapabilities`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_VaultCapabilities)
-  [Function `get_apt_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_signer)
-  [Function `get_unlocked_apt_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_signer)
-  [Function `get_kapt_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_signer)
-  [Function `get_stkapt_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_signer)
-  [Function `withdraw_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_apt)
-  [Function `deposit_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_apt)
-  [Function `withdraw_unlocked_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_unlocked_apt)
-  [Function `deposit_unlocked_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_unlocked_apt)
-  [Function `withdraw_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_kapt)
-  [Function `deposit_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_kapt)
-  [Function `withdraw_stkapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_stkapt)
-  [Function `deposit_stkapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_stkapt)
-  [Function `burn_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_burn_kapt)
-  [Function `get_apt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_balance)
-  [Function `get_kapt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_balance)
-  [Function `get_stkapt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_balance)
-  [Function `get_unlocked_apt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_balance)
-  [Function `get_apt_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_address)
-  [Function `get_unlocked_apt_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_address)
-  [Function `get_kapt_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_address)
-  [Function `get_stkapt_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_address)
-  [Function `get_buffer_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_signer)
-  [Function `withdraw_buffer_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_apt)
-  [Function `deposit_buffer_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_apt)
-  [Function `withdraw_buffer_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_kapt)
-  [Function `deposit_buffer_kapt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_kapt)
-  [Function `get_buffer_apt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_apt_balance)
-  [Function `get_buffer_kapt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_kapt_balance)
-  [Function `get_buffer_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_address)
-  [Function `get_fees_vault_signer`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_signer)
-  [Function `deposit_fees_apt`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_fees_apt)
-  [Function `get_fees_vault_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_address)
-  [Function `get_fees_apt_balance`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_apt_balance)


<pre><code><b>use</b> <a href="">0x1::account</a>;
<b>use</b> <a href="">0x1::aptos_coin</a>;
<b>use</b> <a href="">0x1::coin</a>;
<b>use</b> <a href="">0x1::fungible_asset</a>;
<b>use</b> <a href="">0x1::object</a>;
<b>use</b> <a href="">0x1::primary_fungible_store</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin</a>;
<b>use</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::stkAPT_coin</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_VaultCapabilities"></a>

## Resource `VaultCapabilities`

Stores signer capabilities for vaults


<pre><code><b>struct</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_VaultCapabilities">VaultCapabilities</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_signer"></a>

## Function `get_apt_vault_signer`

Get APT vault signer
* Returns signer for APT vault
*
* @return signer: APT vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_signer">get_apt_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_signer"></a>

## Function `get_unlocked_apt_vault_signer`

Get unlocked APT vault signer
* Returns signer for unlocked APT vault
*
* @return signer: Unlocked APT vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_signer">get_unlocked_apt_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_signer"></a>

## Function `get_kapt_vault_signer`

Get kAPT vault signer
* Returns signer for kAPT vault
*
* @return signer: kAPT vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_signer">get_kapt_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_signer"></a>

## Function `get_stkapt_vault_signer`

Get stkAPT vault signer
* Returns signer for stkAPT vault
*
* @return signer: stkAPT vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_signer">get_stkapt_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_apt"></a>

## Function `withdraw_apt`

Withdraw APT from vault
* Withdraws APT tokens from main vault
*
* @param amount: u64: Amount of APT to withdraw
* @return coin::Coin<AptosCoin>: Withdrawn APT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_apt">withdraw_apt</a>(amount: u64): <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_apt"></a>

## Function `deposit_apt`

Deposit APT to vault
* Deposits APT tokens to main vault
*
* @param coins: coin::Coin<AptosCoin>: APT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_apt">deposit_apt</a>(coins: <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_unlocked_apt"></a>

## Function `withdraw_unlocked_apt`

Withdraw unlocked APT
* Withdraws APT tokens from unlocked vault
*
* @param amount: u64: Amount of APT to withdraw
* @return coin::Coin<AptosCoin>: Withdrawn APT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_unlocked_apt">withdraw_unlocked_apt</a>(amount: u64): <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_unlocked_apt"></a>

## Function `deposit_unlocked_apt`

Deposit unlocked APT
* Deposits APT tokens to unlocked vault
*
* @param coins: coin::Coin<AptosCoin>: APT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_unlocked_apt">deposit_unlocked_apt</a>(coins: <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_kapt"></a>

## Function `withdraw_kapt`

Withdraw kAPT from vault
* Withdraws kAPT tokens from vault
*
* @param amount: u64: Amount of kAPT to withdraw
* @return FungibleAsset: Withdrawn kAPT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_kapt">withdraw_kapt</a>(amount: u64): <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_kapt"></a>

## Function `deposit_kapt`

Deposit kAPT to vault
* Deposits kAPT tokens to vault
*
* @param fa: FungibleAsset: kAPT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_kapt">deposit_kapt</a>(fa: <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_stkapt"></a>

## Function `withdraw_stkapt`

Withdraw stkAPT from vault
* Withdraws stkAPT tokens from vault
*
* @param amount: u64: Amount of stkAPT to withdraw
* @return FungibleAsset: Withdrawn stkAPT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_stkapt">withdraw_stkapt</a>(amount: u64): <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_stkapt"></a>

## Function `deposit_stkapt`

Deposit stkAPT to vault
* Deposits stkAPT tokens to vault
*
* @param fa: FungibleAsset: stkAPT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_stkapt">deposit_stkapt</a>(fa: <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_burn_kapt"></a>

## Function `burn_kapt`

Burn kAPT from vault
* Burns kAPT tokens from vault
*
* @param amount: u64: Amount of kAPT to burn



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_burn_kapt">burn_kapt</a>(amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_balance"></a>

## Function `get_apt_balance`

Get APT balance
* Returns APT balance in main vault
*
* @return u64: APT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_balance">get_apt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_balance"></a>

## Function `get_kapt_balance`

Get kAPT balance
* Returns kAPT balance in vault
*
* @return u64: kAPT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_balance">get_kapt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_balance"></a>

## Function `get_stkapt_balance`

Get stkAPT balance
* Returns stkAPT balance in vault
*
* @return u64: stkAPT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_balance">get_stkapt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_balance"></a>

## Function `get_unlocked_apt_balance`

Get unlocked APT balance
* Returns APT balance in unlocked vault
*
* @return u64: Unlocked APT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_balance">get_unlocked_apt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_address"></a>

## Function `get_apt_vault_address`

Get APT vault address
* Returns address of APT vault
*
* @return address: APT vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_apt_vault_address">get_apt_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_address"></a>

## Function `get_unlocked_apt_vault_address`

Get unlocked APT vault address
* Returns address of unlocked APT vault
*
* @return address: Unlocked APT vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_unlocked_apt_vault_address">get_unlocked_apt_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_address"></a>

## Function `get_kapt_vault_address`

Get kAPT vault address
* Returns address of kAPT vault
*
* @return address: kAPT vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_kapt_vault_address">get_kapt_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_address"></a>

## Function `get_stkapt_vault_address`

Get stkAPT vault address
* Returns address of stkAPT vault
*
* @return address: stkAPT vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_stkapt_vault_address">get_stkapt_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_signer"></a>

## Function `get_buffer_vault_signer`

Get buffer vault signer
* Returns signer for buffer vault
*
* @return signer: Buffer vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_signer">get_buffer_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_apt"></a>

## Function `withdraw_buffer_apt`

Withdraw APT from buffer
* Withdraws APT tokens from buffer vault
*
* @param amount: u64: Amount of APT to withdraw
* @return coin::Coin<AptosCoin>: Withdrawn APT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_apt">withdraw_buffer_apt</a>(amount: u64): <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_apt"></a>

## Function `deposit_buffer_apt`

Deposit APT to buffer
* Deposits APT tokens to buffer vault
*
* @param coins: coin::Coin<AptosCoin>: APT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_apt">deposit_buffer_apt</a>(coins: <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_kapt"></a>

## Function `withdraw_buffer_kapt`

Withdraw kAPT from buffer
* Withdraws kAPT tokens from buffer vault
*
* @param amount: u64: Amount of kAPT to withdraw
* @return FungibleAsset: Withdrawn kAPT



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_withdraw_buffer_kapt">withdraw_buffer_kapt</a>(amount: u64): <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_kapt"></a>

## Function `deposit_buffer_kapt`

Deposit kAPT to buffer
* Deposits kAPT tokens to buffer vault
*
* @param fa: FungibleAsset: kAPT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_buffer_kapt">deposit_buffer_kapt</a>(fa: <a href="_FungibleAsset">fungible_asset::FungibleAsset</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_apt_balance"></a>

## Function `get_buffer_apt_balance`

Get buffer APT balance
* Returns APT balance in buffer vault
*
* @return u64: Buffer APT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_apt_balance">get_buffer_apt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_kapt_balance"></a>

## Function `get_buffer_kapt_balance`

Get buffer kAPT balance
* Returns kAPT balance in buffer vault
*
* @return u64: Buffer kAPT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_kapt_balance">get_buffer_kapt_balance</a>(): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_address"></a>

## Function `get_buffer_vault_address`

Get buffer vault address
* Returns address of buffer vault
*
* @return address: Buffer vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_buffer_vault_address">get_buffer_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_signer"></a>

## Function `get_fees_vault_signer`

Get fees vault signer
* Returns signer for fees vault
*
* @return signer: Fees vault signer



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_signer">get_fees_vault_signer</a>(): <a href="">signer</a>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_fees_apt"></a>

## Function `deposit_fees_apt`

Deposit APT to fees vault
* Deposits APT tokens to fees vault
*
* @param coins: coin::Coin<AptosCoin>: APT to deposit



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_deposit_fees_apt">deposit_fees_apt</a>(coins: <a href="_Coin">coin::Coin</a>&lt;<a href="_AptosCoin">aptos_coin::AptosCoin</a>&gt;)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_address"></a>

## Function `get_fees_vault_address`

Get fees vault address
* Returns address of fees vault
*
* @return address: Fees vault address



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_vault_address">get_fees_vault_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_apt_balance"></a>

## Function `get_fees_apt_balance`

Get fees APT balance
* Returns APT balance in fees vault
*
* @return u64: Fees APT balance



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="vault.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_vault_get_fees_apt_balance">get_fees_apt_balance</a>(): u64
</code></pre>
