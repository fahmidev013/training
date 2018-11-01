function solution(A) {
    var N = A.length + 1;
    var arr = A.sort(function (a, b) {
        return a - b;
    });
    
    for (var i = 0; i < arr.length; ++i) {
        var expectedNum = i + 1;
        if (arr[i] != expectedNum) {
            return expectedNum;
        }
    }
    
    return N;
}