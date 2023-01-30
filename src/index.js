

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  for(let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse()
  }
  /* matrix = matrix.join(',').replaceAll(',', '').split('').map(el => el * 1) */
  let matrix2 = []
  matrix.forEach(element => {
    matrix2.push(...element)
  });
return matrix2
}
