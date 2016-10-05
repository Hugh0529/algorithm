/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = 'aeiouAEIOU',
    sArray = s.split(''),
    length = sArray.length,
    vowelArray = [],
    indexArray = [],
    indexArrayLength,
    element,
    i;

  for (i=length -1; i >= 0; i--) {
    element = sArray[i];
    if (vowels.indexOf(sArray[i]) > -1) {
      vowelArray.push(element);
      indexArray.push(i);
    }
  }

  indexArrayLength = indexArray.length;
  for (i=indexArrayLength - 1; i >= 0; i--) {
    sArray[indexArray[indexArrayLength -1 - i]] = vowelArray[i];
  }

  return sArray.join('');
};