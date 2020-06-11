const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Do Something Async'), 3000)
    : reject(new Error('Test error'))
  })
}

const doSomething = async () => {
  const someThing = await doSomethingAsync()
  console.log(someThing)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
  try {
    const some = await doSomethingAsync()
    console.log(some)
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 2')
anotherFunction()
console.log('After 2')