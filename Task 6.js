const arr = [7, 7, 7, 7];
let result = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        result = false;
        break;
    }
}
console.log(result);
