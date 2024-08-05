module.exports = function check(str, bracketsConfig) {
    const stack = [];
  const bracketsMap = {};
  const sameBrackets = {};

  bracketsConfig.forEach(pair => {
    bracketsMap[pair[1]] = pair[0];
    if (pair[0] === pair[1]) {
      sameBrackets[pair[0]] = true;
    }
  });

  for (const char of str) {
    if (sameBrackets[char]) {
      if (stack.length && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (bracketsMap[char]) {
      if (stack.length && stack[stack.length - 1] === bracketsMap[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
