function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findMedian(numbers: number[]): number {
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2.0;
    } else {
        return numbers[Math.floor(numbers.length / 2)];
    }
}
