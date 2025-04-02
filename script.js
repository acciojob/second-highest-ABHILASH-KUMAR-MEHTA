function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;
    
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (let num of arr) {
        num = Number(num); // Convert input from prompt (string) to number
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    
    return secondMax === -Infinity ? -Infinity : secondMax;
}
