const arr = Array.from({ length: 21 }, (_, i) => i + 1)

const num = Math.ceil(arr.length / 2)

const someArr = []

for (let i = 0; i < num; i++) {
    someArr.push(arr.splice(0, 2))
}

console.log(someArr.length)