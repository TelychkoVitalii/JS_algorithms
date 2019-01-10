/*
Много качественного кода состоит из нечистых функций, процедурно вызывающихся чистыми.
Это все равно несет массу преимуществ для тестирования и неизменяемости.
Ссылочная прозрачность также обладает удобством для мемоизации: кэширование и сохранение результатов вызова функций, а затем переиспользование кэшированных результатов.
Однако определить, когда функции действительно чисты, может быть непросто.
*/

// impure
// var alex = {
//     name: 'Alex',
//     age: 30
// };
//
// function changeAgeImpure(person) {
//     person.age = 25;
//     return person;
// }
//
// var changedAlex = changeAgeImpure(alex);
// console.log(alex); // -> { name: 'Alex', age: 25 }
// console.log(changedAlex); // -> { name: 'Alex', age: 25 }

// pure
// var alex = {
//     name: 'Alex',
//     age: 30
// };
//
// function changeAgePure(person) {
//     var newPersonObj = JSON.parse(JSON.stringify(person));
//     newPersonObj.age = 25;
//     return newPersonObj;
// }
//
// var alexChanged = changeAgePure(alex);
// console.log(alex); // -> { name: 'Alex', age: 30 }
// console.log(alexChanged); // -> { name: 'Alex', age: 25 }