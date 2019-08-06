import { chunk } from 'lodash';

let array = [1, 2, 3, 4];

chunk(array, array.length / 2);
// => [ [ 1, 2 ], [ 3, 4 ] ]

array = [...array, 5];

chunk(array, Math.ceil(array.length / 2));
// => [ [ 1, 2, 3 ], [ 4, 5 ] ]
