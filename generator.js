function createCollection() {
  const data = [];
  const add = item => data.push(item)
  function* iterator() {
    var i = 0;
    while(data[i] !== undefined) {
      yield data[i];
      ++i;
    }
  }
  return {
    [Symbol.iterator]: iterator,
    add,
    iter: iterator
  }
}

console.log(Symbol.iterator)

const collection = createCollection();
collection.add(1)
collection.add(2)

for(var value of collection) {
    console.log(value);
}
for(var value of collection) {
    console.log(value);
}
console.log(collection[Symbol.iterator]().next())
console.log(collection.iter().next())
