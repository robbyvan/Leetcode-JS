function rotate(matrix){
  var n = matrix.length;
  for (i = 0; i < n; ++i ){
    for (j = i; j < n; ++j){
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (var i = 0; i < n; ++i){
    for (var j = 0; j < Math.floor(n / 2); ++j){
      var temp = matrix[i][j];
      matrix[i][j] = matrix[i][n-j-1];
      matrix[i][n-j-1] = temp;
    }
  }
}