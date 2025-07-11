/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} alpha - scalar constant
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {Complex64Array} second input array
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = new Complex64( 2.0, 2.0 );
*
* caxpy( 3, alpha, x, 1, y, 1 );
* // y => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/
function caxpy( N, alpha, x, strideX, y, strideY ) {
	var ix = stride2offset( N, strideX );
	var iy = stride2offset( N, strideY );
	return ndarray( N, alpha, x, strideX, ix, y, strideY, iy );
}


// EXPORTS //

module.exports = caxpy;
