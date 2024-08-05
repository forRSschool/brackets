module.exports = function check(str, bracketsConfig) {
    const stack = [];
  const bracketsMap = new Map(bracketsConfig);
  const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closingBrackets = new Set(bracketsConfig.map(pair => pair[1]));

  for (const char of str) {
    if (openingBrackets.has(char)) {
      // Special case where the bracket can be both opening and closing
      if (closingBrackets.has(char) && stack.length && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closingBrackets.has(char)) {
      if (stack.length && stack[stack.length - 1] === bracketsMap.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
