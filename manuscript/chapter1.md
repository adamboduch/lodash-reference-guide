# Array

{#chapter-1-array}

## chunk

{#chapter-1-array-chunk}
Creates an array of elements split into groups[^chunk].

### splitting arrays in half

If you know the length of the array, you can evenly split your array in half:
![](code/chapter-1/chunk/splitting-arrays-in-half.js)

The first call to `chunk()` uses the `length` property of `array` to figure out what half should be. In this case, since the length is 4, dividing by 2 yields 2. You can tell `chunk()` how big to make each chunk by passing a size value as the second argument.

In the second call to `chunk()`, we've added another element to `array`. This means that half of this 5 element array is 2.5, which can't work. The solution is to use `Math.ceil()` to make sure that an integer is used. In this case, the chunk size is 3. So the result is a 3 element array and a 2 element array. When array lengths cannot be divided by 2 evenly, the best we can do is to divide the array in a way that's roughly equal in size.

## compact

## concat

## difference

## differenceBy

## differenceWith

## drop

## dropRightWhile

## dropWhile

## fill

## findIndex

## findLastIndex

[^chunk]: [chunk documentation](https://lodash.com/docs#chunk)

## flatten

## flattenDeep
