'use strict'

const ERRORS = {
  lengthToBeInteger: 'Length have to be an integer bigger than 0.'
}

const POSSIBLE = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  special: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
}

const generateRandomId = (length, options) => {
  const all = !options || options.all || (!options.numbers && !options.lowerCase && !options.upperCase && !options.special)
  let id = ''
  let possibleLetters = ''

  if (all || options.numbers) {
    possibleLetters += POSSIBLE.numbers
  }
  if (all || options.lowerCase) {
    possibleLetters += POSSIBLE.letters.toLowerCase()
  }
  if (all || options.upperCase) {
    possibleLetters += POSSIBLE.letters.toUpperCase()
  }
  if (all || options.special) {
    possibleLetters += POSSIBLE.special.toUpperCase()
  }

  while (length--) {
    id += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length))
  }

  return id
}

const error = (error) => {
  throw new Error(error)
}

module.exports = {
  ERRORS: ERRORS,
  POSSIBLE: POSSIBLE,
  error: error,
  generateRandomId: generateRandomId
}
