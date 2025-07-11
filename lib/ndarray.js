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

var scabs1 = require( '@stdlib/blas-base-scabs1' );
var cmulf = require( '@stdlib/complex-float32-base-mul' );
var caddf = require( '@stdlib/complex-float32-base-add' );


// MAIN //

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} alpha - scalar constant
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {integer} offsetX - starting index for `x`
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {integer} offsetY - starting index for `y`
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
* caxpy( 3, alpha, x, 1, 0, y, 1, 0 );
* // y => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/
function caxpy( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var i;

	if ( N <= 0 || scabs1( alpha ) === 0.0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		y.set( caddf( cmulf( alpha, x.get( ix ) ), y.get( iy ) ), iy );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = caxpy;
