const generatePage = require('../')

const res = generatePage({
  root: __dirname,
  name: 'temp',
  less: true
})

console.log(res)
