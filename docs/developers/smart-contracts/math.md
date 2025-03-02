
<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math"></a>

# Module `0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17::math`



-  [Constants](#@Constants_0)
-  [Function `ratio`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_ratio)
-  [Function `from_shares`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_from_shares)
-  [Function `to_shares`](#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_to_shares)


<pre><code></code></pre>



<a id="@Constants_0"></a>

## Constants


<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_DIVIDE_BY_ZERO"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_DIVIDE_BY_ZERO">E_DIVIDE_BY_ZERO</a>: u64 = 500;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_RATIO_OVERFLOW"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_RATIO_OVERFLOW">E_RATIO_OVERFLOW</a>: u64 = 502;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_U64_OVERFLOW"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_U64_OVERFLOW">E_U64_OVERFLOW</a>: u64 = 501;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_UNDERFLOW"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_E_UNDERFLOW">E_UNDERFLOW</a>: u64 = 503;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_PRECISION"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_PRECISION">PRECISION</a>: u256 = 100000000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_RATIO_MAX"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_RATIO_MAX">RATIO_MAX</a>: u256 = 1000000000000000000;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_U64_MAX"></a>



<pre><code><b>const</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_U64_MAX">U64_MAX</a>: u128 = 18446744073709551615;
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_ratio"></a>

## Function `ratio`



<pre><code><b>public</b> <b>fun</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_ratio">ratio</a>(supply: u128, tvl: u128): u256
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_from_shares"></a>

## Function `from_shares`

converts stkAPT to kAPT
kAPT = ratio * stkAPT



<pre><code><b>public</b> <b>fun</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_from_shares">from_shares</a>(ratio: u256, amount: u64): u64
</code></pre>



<a id="0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_to_shares"></a>

## Function `to_shares`

converts kAPT to stkAPT
stkAPT = kAPT / ratio



<pre><code><b>public</b> <b>fun</b> <a href="math.md#0x30fc649e796f4b43918b46294fdaa61e03bdf043f3ca36ca54caa9d50b746c17_math_to_shares">to_shares</a>(ratio: u256, shares: u64): u64
</code></pre>
