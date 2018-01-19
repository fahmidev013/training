function solution(A) {
    var last;
    var paired = false;
    var arr = A.sort(function(a, b) {
        return a - b;
    });

    for(var i = 0; i < arr.length; i++){
        if (i > 0) {
            if (arr[i] != last) {
                if (!paired) {
                    return last;
                } else {
                    paired = false;
                }
            } else {
                if (paired) {
                    paired = false;
                } else { 
                    paired = true;
                }
            }
        }
        last = arr[i];
    }
    
    return last;
}