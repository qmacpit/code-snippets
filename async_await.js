async function make() {
   const _make = (id) => {
    return new Promise(resolve => {
      console.log(`making: ${id}`);
      setTimeout(() => {
        console.log(`${id} ready`);
        resolve(id);
      }, 1000)
    });
  }

  // sequentially
  var a = await _make(0);
  var b = await _make(1);
  return {
    a, b
  };
  //concurrently
  // var a = _make(0);
  // var b = _make(1);
  // return {
  //   a: await a, b: await b
  // };
}

make().then(console.log);
