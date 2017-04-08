/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    //create DP table
    // let opt = new Array(rows + 1);
    // for (let i = 0; i < opt.length; ++i) {
    //   opt[i] = new Array(cols + 1);
    // }

    let opt = [];
    for (let i = 0; i <= rows; ++i){
      opt[i] = [];
      for (let j = 0; j <= cols; ++j) {
        opt[i][j] = undefined;
      }
    }


    //init
    for (let i = 0; i <= rows; ++i) {
      opt[i][0] = 0;
    }
    for (let j = 0; j <= cols; ++j) {
      opt[0][j] = 0;
    }
    
    opt[1][1] = 1;

    //recurrence
    for (let i = 1; i <= rows; ++i) {
      for (let j = 1; j <= cols; ++j) {
        if (obstacleGrid[i-1][j-1] === 1) {
          opt[i][j] = 0;
          continue;
        }

        if (i === 1 && j === 1) {
          opt[i][j] = 1;
        }else{
          opt[i][j] = opt[i-1][j] + opt[i][j-1];
        }
      }
    }

    return opt[rows][cols];
};
