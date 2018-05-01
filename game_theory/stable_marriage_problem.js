// /*
//    Gale-Shapley algorithm of stable matching problem (SMP)
//    Complexity: O(N^2).
// */
//
// /*
//    Функция-конструктор Person со свойствами и методами характерными,
//    как для мужчин, так и для женщин
// */
// function Person(name) {
//     var index = 0; // индекс претендента в списке предпочтений (изменяется)
//     this.name = name; // имя каждого участника (изменяется)
//     this.partner = null; // процесс помолвки определяем через изменение значения этого свойства (изменяется)
//     this.candidates = []; // список претендентов
//
//
//     this.rank = function(p) { // метод работает для выбора женщиной
//         var i, size = this.candidates.length;
//         for (i = 0; i < size; i += 1) {
//             if (this.candidates[i] === p) return i; // возвращаем индекс выбранного женщиной мужчины
//         }
//         return size + 1;
//     };
//
//     this.prefers = function(p) { // метод работает для выбора женщиной
//         return this.rank(p) < this.rank(this.partner); // возвращаем булевое значение
//     };
//
//     this.nextCandidate = function() { // метод работает для выбора мужчиной, в случае если получил отказ
//         return this.candidates[index++]; // возвращаем каждой последующей женщины
//     };
//
//     this.offer = function(p) { // метод работает для процесса помолвки. Параметр р - это женщина
//         if (p.partner) {
//             p.partner.partner = null;
//         }
//         p.partner = this; // this = объект Person для каждого из мужчин
//         if (this.partner) {
//             this.partner.partner = null;
//         }
//         this.partner = p; // помолвка
//     };
// }
//
// /*
//    Функция offerToEveryone со основной бизнес логикой
//  */
//
// function offerToEveryone(men) {
//     var done, i, man, woman, menSize = men.length;
//     do { // первое предложение от мужчины =>
//         done = true; // статус true (помолвка) =>
//         for (i = 0; i < menSize; i += 1) { // проходим по массиву мужчин
//             man = men[i];
//             if (!man.partner) { // если у мужчины еще нет пары =>
//                 done = false; // статус false =>
//                 woman = man.nextCandidate(); // определяем следующую девушку в массиве предпочтений
//                 woman.prefers(man) && man.offer(woman); // если девушка не препочитает этого парня (из-за приоритета), мужчина становится одиноким и делает следующее предложение женщине
//             }
//         }
//     } while (!done); // продолжать поиск до тех пор пока у всех мужчин не будет пары и статуса true
// }
//
// function toSplice() {
//     // мужчины
//     var abe  = new Person("Abe"),
//         bob  = new Person("Bob"),
//         col  = new Person("Col"),
//         dan  = new Person("Dan"),
//         ed   = new Person("Ed"),
//         fred = new Person("Fred"),
//         gav  = new Person("Gav"),
//         hal  = new Person("Hal"),
//         ian  = new Person("Ian"),
//         jon  = new Person("Jon");
//
//     // женщины
//     var abi  = new Person("Abi"),
//         bea  = new Person("Bea"),
//         cath = new Person("Cath"),
//         dee  = new Person("Dee"),
//         eve  = new Person("Eve"),
//         fay  = new Person("Fay"),
//         gay  = new Person("Gay"),
//         hope = new Person("Hope"),
//         ivy  = new Person("Ivy"),
//         jan  = new Person("Jan");
//
//     var men = [abe, bob, col, dan, ed, fred, gav, hal, ian, jon], i, size;
//
//     // приоритеты каждого из мужчин в порядке возрастания
//     abe.candidates  = [abi, eve, cath, ivy, jan, dee, fay, bea, hope, gay];
//     bob.candidates  = [cath, hope, abi, dee, eve, fay, bea, jan, ivy, gay];
//     col.candidates  = [hope, eve, abi, dee, bea, fay, ivy, gay, cath, jan];
//     dan.candidates  = [ivy, fay, dee, gay, hope, eve, jan, bea, cath, abi];
//     ed.candidates   = [jan, dee, bea, cath, fay, eve, abi, ivy, hope, gay];
//     fred.candidates = [bea, abi, dee, gay, eve, ivy, cath, jan, hope, fay];
//     gav.candidates  = [gay, eve, ivy, bea, cath, abi, dee, hope, jan, fay];
//     hal.candidates  = [abi, eve, hope, fay, ivy, cath, jan, bea, gay, dee];
//     ian.candidates  = [hope, cath, dee, gay, bea, abi, fay, ivy, jan, eve];
//     jon.candidates  = [abi, fay, jan, gay, eve, bea, dee, cath, ivy, hope];
//
//     // приоритеты каждой из женщин в порядке возрастания
//     abi.candidates  = [bob, fred, jon, gav, ian, abe, dan, ed, col, hal];
//     bea.candidates  = [bob, abe, col, fred, gav, dan, ian, ed, jon, hal];
//     cath.candidates = [fred, bob, ed, gav, hal, col, ian, abe, dan, jon];
//     dee.candidates  = [fred, jon, col, abe, ian, hal, gav, dan, bob, ed];
//     eve.candidates  = [jon, hal, fred, dan, abe, gav, col, ed, ian, bob];
//     fay.candidates  = [bob, abe, ed, ian, jon, dan, fred, gav, col, hal];
//     gay.candidates  = [jon, gav, hal, fred, bob, abe, col, ed, dan, ian];
//     hope.candidates = [gav, jon, bob, abe, ian, dan, hal, ed, col, fred];
//     ivy.candidates  = [ian, col, hal, gav, fred, bob, abe, ed, jon, dan];
//     jan.candidates  = [ed, hal, gav, abe, bob, jon, col, ian, fred, dan];
//
//     offerToEveryone(men);
//
//     // выводим в консоль идеальные устойчивые паросочетания мужчин и женщин
//     for (i = 0, size = men.length; i < size; i += 1) {
//         console.log(men[i].name + ' => ' + men[i].partner.name);
//     }
// }
//
// toSplice();
//
// /*
//     Порядок работы функций(методов)
//     toSplice => offerToEveryone => Person[nextCandidate => prefers => rank => offer]
//  */