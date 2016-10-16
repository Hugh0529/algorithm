/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var magazineLength = magazine.length,
    i,
    element;

  for (i = magazineLength - 1; i >= 0; i--) {
    element = magazine.charAt(i);
    if (ransomNote.indexOf(element) >= 0) {
      ransomNote.replace(element, '');
    }
  }

  return ransomNote.length === 0;
};
