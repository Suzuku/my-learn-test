function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  console.log(sum)
}

add(2, 5, 3) // 10

