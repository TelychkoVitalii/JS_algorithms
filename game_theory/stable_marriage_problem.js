// // Gale-Shapley algorithm of stable matching problem (SMP)
//
// function Person(name) {
//     var candidateIndex = 0;
//
//     this.name = name;
//     this.fiance = null;
//     this.candidates = [];
//
//     this.rank = function(p) {
//         var i, size = this.candidates.length;
//         for (i = 0; i < size; i += 1)
//             if (this.candidates[i] === p) return i; // number of index in array
//         return size + 1;
//     };
//
//     this.prefers = function(p) {
//         return this.rank(p) < this.rank(this.fiance); // boolean
//     };
//
//     this.nextCandidate = function() {
//         if (candidateIndex >= this.candidates.length) return null;
//         return this.candidates[candidateIndex++]; // new name of candidate
//     };
//
//     this.engageTo = function(p) {
//         if (p.fiance) p.fiance.fiance = null;
//         p.fiance = this;
//         if (this.fiance) this.fiance.fiance = null;
//         this.fiance = p;
//     };
//
//     this.swapWith = function(p) {
//         console.log("%s & %s swap partners", this.name, p.name);
//         var thisFiance = this.fiance,
//             pFiance = p.fiance;
//         this.engageTo(pFiance);
//         p.engageTo(thisFiance);
//     }
// }
//
// function isStable(guys, gals) {
//     var i, j, guysSize = guys.length, galsSize = gals.length;
//     for (i = 0; i < guysSize; i += 1)
//         for (j = 0; j < galsSize; j += 1)
//             if (guys[i].prefers(gals[j]) && gals[j].prefers(guys[i]))
//                 return false;
//     return true;
// }
//
// function engageEveryone(guys) {
//     var done, i, guy, gal, guysSize = guys.length;
//     do {
//         done = true;
//         for (i = 0; i < guysSize; i += 1) {
//             guy = guys[i];
//             if (!guy.fiance) {
//                 done = false;
//                 gal = guy.nextCandidate();
//                 if (!gal.fiance || gal.prefers(guy))
//                     guy.engageTo(gal);
//             }
//         }
//     } while (!done);
// }
//
// function doMarriage() {
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
//     var guys = [abe, bob, col, dan, ed, fred, gav, hal, ian, jon],
//         gals = [abi, bea, cath, dee, eve, fay, gay, hope, ivy, jan], i;
//
//     engageEveryone(guys);
//
//     for (i = 0; i < guys.length; i += 1) {
//         console.log("%s is engaged to %s", guys[i].name, guys[i].fiance.name);
//     }
//     console.log("Stable = %s", isStable(guys, gals) ? "Yes" : "No");
//     jon.swapWith(fred);
//     console.log("Stable = %s", isStable(guys, gals) ? "Yes" : "No");
// }
//
// doMarriage();
