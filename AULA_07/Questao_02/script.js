
const obj = {};

obj["Um atributo com espaços"] = 1

console.log (
    obj["Um atributo com espaços"]
)

console.log (
    Object.values(obj)
)

console.log (
    Object.getOwnPropertyDescriptor(obj, "Um atributo com espaços").value
)