// var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// var romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//
// function convertToRoman(num) {
//     var i, size = numbers.length, romanized = '';
//     for(i = 0; i < size; i += 1) {
//        while(numbers[i] <= num) {
//            romanized += romanNumbers[i];
//            num -= numbers[i];
//        }
//     }
//     return romanized;
// }
//
// convertToRoman(26);