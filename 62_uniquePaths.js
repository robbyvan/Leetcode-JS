/**
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const uniquePaths = (rows, cols) => {
  let OPT = new Array(rows+1);
  for (let i = 0; i < OPT.length; ++i){
    OPT[i] = new Array(cols+1);
  }
  
  //init
  for (let i = 0; i < rows+1; ++i) {
    OPT[i][0] = 0;
  }

  for (let j = 0; j < cols+1; ++j) {
    OPT[0][j] = 0;
  }

  OPT[1][1] = 1;

  //recurrence
  for (let i = 1; i <= rows; ++i) {
    for (let j = 1; j <= cols; ++j) {
      if(i === 1 && j === 1){
        OPT[i][j] = 1;
      }else {
        OPT[i][j] = OPT[i-1][j] + OPT[i][j-1];
      }
    }
  }
  return OPT[rows][cols];
}