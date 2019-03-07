// Destructuring as a recursive pattern matching algorithm.
// 1. «pattern» = «value»
// 2. Rule - {key: «pattern», «properties»} ← obj => (Object Pattern)
                // «pattern» ← obj.key
                // {«properties»} ← obj
// ||  {} ← obj (no properties left)
// 3. Description
// The effect of this rule is that execution continues with the property value pattern being matched
// against obj.key and the remaining properties being matched against obj.

// 1. Variable Pattern
// x ← value (including undefined and null)
// x = value

// 2. Object Pattern
// {«properties»} ← undefined || null (throw new TypeError())
// {key: «pattern» = default_value, «properties»} ← obj

// const tmp = obj.key;
// if(tmp !== undefined) {
//   «pattern» ← tmp
// } else {
//   «pattern» ← default_value
// }
// {«properties»} ← obj

// 3. Array Pattern => the same
