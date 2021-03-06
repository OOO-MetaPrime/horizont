
function repeat (char, count) {
  let result = ''
  while (count) {
    result += char
    count--
  }

  return result
}

function padStart (str, targetLength, padString) {
  targetLength = targetLength >> 0 // floor if number or convert non-number to 0
  padString = String(padString || ' ')
  if (str.length > targetLength) {
    return String(str)
  } else {
    targetLength = targetLength - str.length
    if (targetLength > padString.length) {
      padString += repeat(padString, targetLength / padString.length) // append to original to ensure we are longer than needed
    }
    return padString.slice(0, targetLength) + String(str)
  }
};
export {
  repeat,
  padStart
}
