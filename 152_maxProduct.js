function maxProduct(var A[], var n) {
    var r = A[0];
    for (var i = 1, imax = r, imin = r; i < n; i++) {
        if (A[i] < 0){
          var temp = imax;
          imax = imin;
          imin = temp;
        }
        imax = max(A[i], imax * A[i]);
        imin = min(A[i], imin * A[i]);
        r = max(r, imax);
    }
    return r;
}