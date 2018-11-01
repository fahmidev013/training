function solution(A, B, C) {
    const N = A.length;
    let numberOfWays = 0;
    
    /*
    Brute-force:
    1. Go through all of the A values
    2. Nest another one for the B values
    3. One more loop for the C values
    4. You can a combination of (A,B,C) triplets
    5. It would give O(N**3) but its fine, optimize after
    6. The first thing would be to store somewhere and somehow this triplet (flag it)
    7. Then check if they are on different places - A[K] !== B[K] !== C[K]
    8. TODO: One-two more checks here... -> A[K] < B[K] < C[K]
    9. If all is true numberOfWays++;
    10. Check if numberOfWays > 1000000000 and if true return -1
    */
    
    for (let P = 0; P < N; ++P) {
        let saladStopKm = A[P];
        for (let Q = 0; Q < N; ++Q) {
            let pizzaStopKm = B[Q];
            for (let R = 0; R < N; ++R) {
                let cakeStopKm = C[R];
                if ((saladStopKm !== pizzaStopKm) && (saladStopKm != cakeStopKm) && (pizzaStopKm !== cakeStopKm)) {
                    // This means that none of them is at the same position
                    if ((saladStopKm < pizzaStopKm) && (saladStopKm < cakeStopKm) && (pizzaStopKm < cakeStopKm)) {
                        // This means that salad goes first, pizza goes second and cakes goes last
                        numberOfWays++;
                    }
                }
            }
        }
    }
    
    if (numberOfWays > 1000000000) {
        return -1;
    }
    
    return numberOfWays;
}