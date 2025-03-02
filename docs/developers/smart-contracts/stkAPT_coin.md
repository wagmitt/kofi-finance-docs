
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::stkAPT_coin`

stkAPT Token Module
Manages the staked APT token for the Kofi protocol.


-  [Resource `Management`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Management)
-  [Struct `Mint`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Mint)
-  [Struct `Burn`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Burn)
-  [Constants](#@Constants_0)
-  [Function `stkAPT_address`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_stkAPT_address)
-  [Function `metadata`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_metadata)
-  [Function `mint`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_mint)
-  [Function `burn`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_burn)
-  [Function `total_supply`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_total_supply)


<pre><code><b>use</b> <a href="">0x1::event</a>;
<b>use</b> <a href="">0x1::fungible_asset</a>;
<b>use</b> <a href="">0x1::object</a>;
<b>use</b> <a href="">0x1::option</a>;
<b>use</b> <a href="">0x1::primary_fungible_store</a>;
<b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="">0x1::string</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Management"></a>

## Resource `Management`

Management Capabilities
Holds references for managing the fungible asset.



<pre><code>#[resource_group_member(#[group = <a href="_ObjectGroup">0x1::object::ObjectGroup</a>])]
<b>struct</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Management">Management</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Mint"></a>

## Struct `Mint`

Mint Event
Emitted when new tokens are minted.



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Mint">Mint</a> <b>has</b> drop, store
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Burn"></a>

## Struct `Burn`

Burn Event
Emitted when tokens are burned.



<pre><code>#[<a href="">event</a>]
<b>struct</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_Burn">Burn</a> <b>has</b> drop, store
</code></pre>



<a id="@Constants_0"></a>

## Constants


<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_ASSET_SYMBOL"></a>

Token symbol for staked APT


<pre><code><b>const</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_ASSET_SYMBOL">ASSET_SYMBOL</a>: <a href="">vector</a>&lt;u8&gt; = [115, 116, 107, 65, 80, 84];
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_stkAPT_address"></a>

## Function `stkAPT_address`

Get stkAPT address
Returns the deterministic address where the stkAPT token metadata is stored.

@return address: The deterministic address for stkAPT metadata



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_stkAPT_address">stkAPT_address</a>(): <b>address</b>
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_metadata"></a>

## Function `metadata`

Get metadata
Returns the metadata object for the stkAPT token.

@return Object<Metadata>: The stkAPT metadata object



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_metadata">metadata</a>(): <a href="_Object">object::Object</a>&lt;<a href="_Metadata">fungible_asset::Metadata</a>&gt;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_mint"></a>

## Function `mint`

Mint new tokens
Mints new stkAPT tokens to recipient's primary store.

@param minter: signer: Account minting tokens
@param to: address: Recipient address
@param amount: u64: Amount of tokens to mint



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_mint">mint</a>(minter: &<a href="">signer</a>, <b>to</b>: <b>address</b>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_burn"></a>

## Function `burn`

Burn tokens
Burns existing stkAPT tokens.

@param burner: signer: Account burning tokens
@param amount: u64: Amount of tokens to burn



<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_burn">burn</a>(burner: &<a href="">signer</a>, amount: u64)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_total_supply"></a>

## Function `total_supply`

Get total supply
Returns total amount of stkAPT in circulation.

@return u128: Total supply of stkAPT



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="stkAPT_coin.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_stkAPT_coin_total_supply">total_supply</a>(): u128
</code></pre>
