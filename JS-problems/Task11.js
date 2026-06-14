// Task 11: Deep Object Comparison
// Check if two nested objects are deeply equal.

// Example:
// { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } } → true
// { a: 1, b: { c: 3 } } and { a: 1, b: { c: 2 } } → false
function deeplycheckobj(ob1, ob2) {
  for (let key in ob1) {
    if (typeof ob1[key] === "object") {
      if (!deeplycheckobj(ob1[key], ob2[key])) {
        return false;
      }
    } else {
      if (ob1[key] !== ob2[key]) {
        return false;
      }
    }
  }

  return true;
}

let obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};

let obj2 = {
  a: 1,
  b: {
    c: 2,
  },
};

console.log(deeplycheckobj(obj1, obj2)); // true
