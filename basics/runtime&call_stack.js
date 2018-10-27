// V8 Engine:
// 1. Memory Heap: memory allocation
// 2. Call Stack: code executes
// 3. Garbage collection: clear stack

// V8 Engine use Wep API's(DOM, AJAX etc..)
// Each entry in call stack is called Stack Frame. It is a queue.

// V8 Engine translate JS code into machine code (instead interpreter and without intermediate byte code representation) with JIT compilation.
// V8 Engine uses 2 compilers: Full-codegen(produced slow machine code) and crankshaft(optimizing compiler).

// V8 Engine have several threads:
// 1. Main thread - fetch code, compile it and execute.
// 2. Profiler thread tell what methods spend a lot of time and crankshaft optimize it.
// 3. Few threads to handle garbage collector.

// Crankshaft translates the JavaScript abstract syntax tree to a
// high-level static single-assignment (SSA) representation called Hydrogen and
// tries to optimize that Hydrogen graph. Most compiler_optimizations are done at this level.

// Once the Hydrogen graph is optimized, Crankshaft lowers it to a lower-level representation called Lithium.
// Most of the Lithium implementation is architecture-specific. Register allocation happens at this level.
// In the end, Lithium is compiled into machine code.

// For garbage collection, V8 uses a traditional generational approach of mark-and-sweep to clean the old generation.
// The marking phase is supposed to stop the JavaScript execution.
// In order to control GC costs and make the execution more stable, V8 uses incremental marking:
// instead of walking the whole heap, trying to mark every possible object, it only walk part of the heap,
// then resumes normal execution. The next GC stop will continue from where the previous heap walk has stopped.
// This allows for very short pauses during the normal execution. As mentioned before, the sweep phase is handled by separate threads.