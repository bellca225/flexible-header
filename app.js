const testNum = [1, 2, 3, 4, 5];

let result;

result = testNum.reduce((acc, cur, i, ele) => {
  console.log(ele);
  console.log(i);

  return acc + cur;
});

console.log(result);
