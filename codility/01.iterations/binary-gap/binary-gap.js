function solution(N) {
    var binary = new Number(N).toString(2);
    var counter = 0;
    var maxLength = 0;
    for (var i = 0; i < binary.length; i++) {
        var digit = binary[i];
        if (digit == '1') {
            if (counter > 0) {
                if (counter > maxLength) {
                    maxLength = counter;
                }
                counter = 0;
            }
        } else if (digit == '0') {
            counter++;
        }
    }
    return maxLength;
}