function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);
  const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const sameBrackets = bracketsConfig.filter(pair => pair[0] === pair[1]).map(pair => pair[0]);

  for (const char of str) {
    if (openingBrackets.has(char)) {
      if (sameBrackets.includes(char)) {
        if (stack.length && stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        stack.push(char);
      }
    } else {
      const last = stack.pop();
      if (bracketsMap.get(char) !== last) {
        return false;
      }
    }
  }

  return stack.length === 0;
}