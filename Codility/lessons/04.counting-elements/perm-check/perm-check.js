function solution(A) {
    var N = A.length;
    var memory = {};
    
    if (N == 0) { 
        return 0;
    }
    
    for (var i = 1; i <= N; ++i) {
        memory[i] = false;
    }
    
    for (var i = 0; i < N; ++i) {
        if (memory[A[i]]) {
            // means that the number is repeating
            return 0;
        }
        memory[A[i]] = true;
    }
    
    for (var i = 1; i <= N; ++i) {
        if (!memory[i]) {
            // means that the number is missing
            return 0;
        }
    }
    
    return 1;
}
