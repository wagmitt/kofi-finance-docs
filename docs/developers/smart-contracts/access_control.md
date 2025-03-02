
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::access_control`



-  [Resource `OwnerCap`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_OwnerCap)
-  [Function `initialize_owner`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_initialize_owner)
-  [Function `only_owner`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_only_owner)
-  [Function `transfer_owner`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_transfer_owner)
-  [Function `get_owner`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_get_owner)


<pre><code><b>use</b> <a href="">0x1::signer</a>;
<b>use</b> <a href="errors.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_errors">0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::errors</a>;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_OwnerCap"></a>

## Resource `OwnerCap`

Store this at module's resource account to track initialization


<pre><code><b>struct</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_OwnerCap">OwnerCap</a> <b>has</b> key
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_initialize_owner"></a>

## Function `initialize_owner`

Initialize the owner - can only be called by the module publisher


<pre><code><b>public</b>(<b>friend</b>) <b>fun</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_initialize_owner">initialize_owner</a>(kofi: &<a href="">signer</a>, owner: <b>address</b>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_only_owner"></a>

## Function `only_owner`



<pre><code><b>public</b> <b>fun</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_only_owner">only_owner</a>(<a href="">account</a>: &<a href="">signer</a>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_transfer_owner"></a>

## Function `transfer_owner`

Transfer the OwnerCap to a new owner


<pre><code><b>public</b> <b>fun</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_transfer_owner">transfer_owner</a>(<a href="">account</a>: &<a href="">signer</a>, new_owner: <b>address</b>)
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_get_owner"></a>

## Function `get_owner`



<pre><code>#[view]
<b>public</b> <b>fun</b> <a href="access_control.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_access_control_get_owner">get_owner</a>(): <b>address</b>
</code></pre>
