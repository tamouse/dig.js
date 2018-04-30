const dig = require("../src/dig.js")

let a = {
  top: {
    next: {
      several: [{ id: 1, name: "one" }, { id: 2, name: "two" }],
      other: {
        real: false,
      },
    },
  },
}

console.log(dig(a, "top.next.several.0.name"))
console.log(dig(a, "top.next.other"))
console.log(dig(a, "top.last.several.1.name"))
console.log(dig(a, "top.a.b.c.d.e.f.g"))
