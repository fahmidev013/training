function solution(A) {
    var N = A.length;
    var leftSum = A[0];
    var rightSum = A.slice(1).reduce((a, b) => a + b, 0);
    var min = Math.abs(leftSum - rightSum);
    
    for (var P = 1; P < N; P++) {
        var difference = Math.abs(leftSum - rightSum);
        
        if (difference < min) {
            min = difference;
        }
        
        leftSum += A[P];
        rightSum -= A[P];
    }
    
    return min;
}