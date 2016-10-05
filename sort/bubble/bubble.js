var test = [1, 25, 11, 35, 88]

var bubbleSort = function (elements) {
  var i = 0
  var j = 0
  var swap
  for (i; i < elements.length; i++) {
    for (j; j < elements.length - i -1; j++) {
      if (elements[j] > elements[j+1]) {
        swap = elements[j]
        elements[j] = elements[j+1]
        elements[j+1] = swap
      }
    }
  }
  return elements
}

console.log('test array: ', test)
console.log('sort result: ', bubbleSort(test))
