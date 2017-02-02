//splice
//mutable
const a1 = [0, 1, 2];
//remove from array
a1.splice(1,1);
console.log(a1);
// => [0, 2]
//add to array
a1.splice(1,0,1);
console.log(a1);
// => [0, 1, 2]

//slice
//immutable
//shallow copy of a portion of an array
const a2 = [0, 1, 2, 3];
console.log(a2.slice(1, 3));
// => [1, 2]

//concat
//immutable
//shallow copy of a portion of an array
const a3 = [0, 1, 2, 3];
console.log(a3.concat([4, 5], [6]));
// => [0, 1, 2, 3, 4, 5, 6]


const a4 = [0, 1, 2, 3];
console.log(
Array.prototype.concat.call(
    a4.slice(0, 2),
    [ 10 ],
    a4.slice(2,4)
  )
)
// => [0, 1, 10, 2, 3]
