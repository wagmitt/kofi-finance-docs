
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::kAPT_coin`

kAPT Token Module
Manages the liquid staking derivative token for the Kofi protocol.


-  [Resource `Management`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Management)
-  [Struct `Mint`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Mint)
-  [Struct `Burn`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Burn)
-  [Constants](#@Constants_0)
-  [Function `kAPT_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_kAPT_address)
-  [Function `metadata`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_metadata)
-  [Function `mint`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_mint)
-  [Function `burn`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_burn)
-  [Function `total_supply`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_total_supply)


<pre><code><b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::fungible_asset</a>;
<b>use</b> <a href="">0x1::object</a>;
<b>use</b> <a href="">0x1::option</a>;
<b>use</b> <a href="">0x1::primary_fungible_store</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::string</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Management"></a>

## Resource `Management`

Management Capabilities
Holds references for managing the fungible asset.



<pre><code>#[resource_group_member(#[group = <a href="_ObjectGroup">0x1::object::ObjectGroup</a>])]
<b>struct</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Management">Management</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Mint"></a>

## Struct `Mint`

Mint Event
Emitted when new tokens are minted.



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Mint">Mint</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Burn"></a>

## Struct `Burn`

Burn Event
Emitted when tokens are burned.



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_Burn">Burn</a> <b>has</b> drop, store
</code></pre>



<a id="@Constants_0"></a>

## Constants


<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_ASSET_SYMBOL"></a>

Token symbol for staked APT


<pre><code><b>const</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_ASSET_SYMBOL">ASSET_SYMBOL</a>: <a href="">vector</a>&lt;u8&gt; = [107, 65, 80, 84];
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_kAPT_address"></a>

## Function `kAPT_address`

Get kAPT address
Returns the deterministic address where the kAPT token metadata is stored.

@return address: The deterministic address for kAPT metadata



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_kAPT_address">kAPT_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_metadata"></a>

## Function `metadata`

Get metadata
Returns the metadata object for the kAPT token.

@return Object<Metadata>: The kAPT metadata object



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_metadata">metadata</a>(): <a href="_Object">object::Object</a>&lt;<a href="_Metadata">fungible_asset::Metadata</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_mint"></a>

## Function `mint`

Mint new tokens
Mints new kAPT tokens to recipient's primary store.

@param to: address: Recipient address
@param amount: u64: Amount of tokens to mint



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_mint">mint</a>(<b>to</b>: <b>address</b>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_burn"></a>

## Function `burn`

Burn tokens
Burns existing kAPT tokens.

@param burner: signer: Account burning tokens
@param amount: u64: Amount of tokens to burn



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_burn">burn</a>(burner: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_total_supply"></a>

## Function `total_supply`

Get total supply
Returns total amount of kAPT in circulation.

@return u128: Total supply of kAPT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="kAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_kAPT_coin_total_supply">total_supply</a>(): u128
</code></pre>
