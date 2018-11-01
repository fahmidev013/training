function solution(X, Y, D) {
    var totalDistance = Y - X;
    var jumpsRequired = totalDistance / D;
    return Math.ceil(jumpsRequired);
}