/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid){
    var rows = obstacleGrid.length;
    var cols = obstacleGrid[0].length;

    //create DP table
    // var opt = new Array(rows + 1);
    // for (var i = 0; i < opt.length; ++i) {
    //   opt[i] = new Array(cols + 1);
    // }

    var opt = [];
    for (var i = 0; i <= rows; ++i){
      opt[i] = [];
      for (var j = 0; j <= cols; ++j) {
        opt[i][j] = undefined;
      }
    }


    //init
    for (var i = 0; i <= rows; ++i) {
      opt[i][0] = 0;
    }
    for (var j = 0; j <= cols; ++j) {
      opt[0][j] = 0;
    }
    
    opt[1][1] = 1;

    //recurrence
    for (var i = 1; i <= rows; ++i) {
      for (var j = 1; j <= cols; ++j) {
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
