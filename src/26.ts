function reverseArray(arr: number[]): number[] {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

// Example usage:
const numbers: number[] = [5, 3, 8, 4, 6];
console.log(reverseArray(numbers));
