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

var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var ccopy = require( '@stdlib/blas-base-ccopy' );
var zeros = require( '@stdlib/array-zeros' );
var logEach = require( '@stdlib/console-log-each' );
var caxpy = require( './../lib' );

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
