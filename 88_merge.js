function merge(nums1, m, nums2, n){
  while(m > 0 && n > 0){
        if(A[m - 1] > B[n - 1]){
            A[m+n-1] = A[m-1];
            m--;
        } else {
            A[m+n-1] = B[n-1];
            n--;
        }
    }
    
    while(n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }

}