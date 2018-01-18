function solution(A, K) {
    if (A.length == 0) { 
        return []; 
    }
    
    for (var i = 0; i < K; i++) {
        var last = A.pop();
        A.unshift(last);
    }
    
    return A;
}