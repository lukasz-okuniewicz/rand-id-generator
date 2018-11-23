'use strict'

const { ERRORS, error, generateRandomId } = require('./helpers')

const generate = (length, options) => {
  if (typeof length === 'undefined') {
    length = 10
  }
  if (length > 0) {
    return generateRandomId(length, options)
  }
  return error(ERRORS.lengthToBeInteger)
}

module.exports = generate
