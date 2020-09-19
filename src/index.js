const jwt = require('jsonwebtoken')

const [ , , option, secret, nameOrToken] = process.argv

if (!option || !secret || !nameOrToken) {
  console.log( " missing arguments ")
}

const signToken = (payload, secret) => jwt.sign(payload, secret)

const verifyToken = (token, secret) => jwt.verify(token, secret)

if (option == 'sign') {
  console.log (signToken({sub: nameOrToken}, secret))
} else if( option == 'verify'){
  console.log(verifyToken( nameOrToken, secret ))
} else {
  console.log(`Option to be need "sign" or "verify"`)
}