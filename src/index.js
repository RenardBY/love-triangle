/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let triangles = 0;

  preferences.forEach(function callback(currentValue, index, array) {

    let firstNode = array[index];
    let secondNode = array[firstNode-1];
    let thirdNode = array[secondNode-1];

    function clearNode() {
      firstNode = undefined;
      secondNode = undefined;
      thirdNode = undefined;
    }

    function clearCurrentValue(){
      array[index] = undefined;
      array[firstNode-1] = undefined;
      array[secondNode-1] = undefined;
    }

    if (firstNode-1 == index) {
      array[index] = undefined;
      clearNode();
    }

    if (firstNode == secondNode) {
       clearCurrentValue();
       clearNode();
    }

    if (index+1 == thirdNode) {
      triangles++;
      clearCurrentValue()
    }

  }
);
return triangles;
};
