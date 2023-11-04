function chunkArrayEvenly(array, n) {
    let result = [];
    let k = Math.ceil(array.length / n);
  
    for (let i = 0; i < k; i++) {
      result.push([]);
    }
  
    for (let i = 0; i < array.length; i++) {
      result[i % k].push(array[i]);
    }
  
    return result;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  const chunks = 4;
  
  const result = chunkArrayEvenly(array, chunks);
  console.log(result);