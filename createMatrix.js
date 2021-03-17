
export function createMatrix(rows,columns) {
  const outerArray = [];
  
  for (let r = 0; r < rows; r++) {
    const innerArray = [];

    for (let c = 0; c < columns; c++) {
      innerArray.push(0);
    }

    outerArray.push(innerArray)
    
  }
  
  return matrix;
}