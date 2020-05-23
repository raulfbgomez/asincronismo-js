// ECMAScript 6
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey! Todo OK')
    } else {
      reject('Oppppps!')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error))


const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('Errooooor!')
      reject(error)
    }
  })
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(error => console.log(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response)
  })
  .catch(err => {
    console.error(err)
  })