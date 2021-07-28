decodeMorse = function(morseCode){
  return morseCode
    .split('   ')
    .map((item) => item.split(' '))
    .map((item) => item.map((item) => MORSE_CODE[item]))
    .join(' ')
    .replace(new RegExp(',','gi'), '')
    .trim();
}