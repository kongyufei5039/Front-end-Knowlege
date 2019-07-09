const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(new Date())
    reject(new Error('filed'))
  }, 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(new Date())
    resolve(p1)
  }, 1000)
})

console.log(new Date())

p2.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
