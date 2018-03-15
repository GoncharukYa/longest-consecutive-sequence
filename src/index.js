module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) { 
    return 0;
  };
  if (array.length == 1) { 
    return 1;
  };
  let set = new Set(array);
  let currentLength =  1;
  let maxLength = 1;
  let currentNum;
  for (let key of set) { 
    if (!set.has(key - 1)) {
      currentNum = key;
      currentLength = 1;
    };
    while (set.has(currentNum + 1)) { 
      currentLength++;
      currentNum++;
      if (maxLength < currentLength) { 
        maxLength = currentLength;
      };
    };
  };
  return maxLength;
}
