<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# caxpy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scale a single-precision complex floating-point vector by a single-precision complex floating-point constant and add the result to a single-precision complex floating-point vector.



<section class="usage">

## Usage

To use in Observable,

```javascript
caxpy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-caxpy@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var caxpy = require( 'path/to/vendor/umd/blas-base-caxpy/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-caxpy@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.caxpy;
})();
</script>
```

#### caxpy( N, alpha, x, strideX, y, strideY )

Scales values from `x` by `alpha` and adds the result to `y`.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

caxpy( 3, alpha, x, 1, y, 1 );
// y => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **x**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are scaled by `alpha` and added to `y`. For example, to scale every other value in `x` by `alpha` and add the result to every other value of `y`,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

caxpy( 2, alpha, x, 2, y, 2 );
// y => <Complex64Array>[ -1.0, 7.0, 1.0, 1.0, -1.0, 23.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

// Initial arrays...
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

// Define a scalar constant:
var alpha = new Complex64( 2.0, 2.0 );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Scales values of `x0` by `alpha` starting from second index and add the result to `y0` starting from third index...
caxpy( 2, alpha, x1, 1, y1, 1 );
// y0 => <Complex64Array>[ 1.0, 1.0, 1.0, 1.0, -1.0, 15.0, -1.0, 23.0 ]
```

#### caxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Scales values from `x` by `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

caxpy.ndarray( 3, alpha, x, 1, 0, y, 1, 0 );
// y => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to scale values in the first input strided array starting from the second element and add the result to the second input array starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

caxpy.ndarray( 3, alpha, x, 1, 1, y, 1, 1 );
// y => <Complex64Array>[ 1.0, 1.0, -1.0, 15.0, -1.0, 23.0, -1.0, 31.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   `caxpy()` corresponds to the [BLAS][blas] level 1 function [`caxpy`][caxpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ccopy@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-caxpy@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex64', rand );
var y = filledarrayBy( 10, 'complex64', rand );
var yc = ccopy( y.length, y, 1, zeros( y.length, 'complex64' ), 1 );

var alpha = new Complex64( 2.0, 2.0 );

// Scale values from `x` by `alpha` and add the result to `y`:
caxpy( x.length, alpha, x, 1, y, 1 );

// Print the results:
logEach( '(%s)*(%s) + (%s) = %s', alpha, x, yc, y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-caxpy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-caxpy

[test-image]: https://github.com/stdlib-js/blas-base-caxpy/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/blas-base-caxpy/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-caxpy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-caxpy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-caxpy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-caxpy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-caxpy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-caxpy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-caxpy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-caxpy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-caxpy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-caxpy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-caxpy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-caxpy/main/LICENSE

[blas]: http://www.netlib.org/blas

[caxpy]: https://www.netlib.org/lapack/explore-html/d5/d4b/group__axpy_ga0b7bac1f4d42514074a48f14f5f9caa0.html#ga0b7bac1f4d42514074a48f14f5f9caa0

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor/tree/umd

</section>

<!-- /.links -->
