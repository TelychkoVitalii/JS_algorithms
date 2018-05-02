// function checkCashRegister(price, cash, cid) {
//     var rest = cash - price, num = 0;
//     cid.forEach(el => {
//         num += el[1];
//         if(num < rest) {
//             return "Insufficient Funds";
//         } else if(num === rest) {
//             return 'Closed';
//         } else {
//             return 1;
//         }
//     });
//     // console.log(rest);
// }
//
// console.log(checkCashRegister(19.50, 20.00, [
//     ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25],
//     ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]
// ]));