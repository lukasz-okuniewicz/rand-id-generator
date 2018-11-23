import test from 'ava'
import generate from '../index'
import { ERRORS, POSSIBLE } from '../helpers'

test('generate should throw error', t => {
  const error = t.throws(() => {
    generate('s')
  })
  t.is(error.message, ERRORS.lengthToBeInteger)
})

test('id should be have 10 symbols', t => {
  const id = generate()
  t.is(id.length, 10)
})

test('id should be have 20 symbols', t => {
  const id = generate(20)
  t.is(id.length, 20)
})

test('id should have only digits', t => {
  const options = {
    numbers: true,
    lowerCase: false,
    upperCase: false,
    special: false
  }
  const id = generate(5, options)
  t.truthy(id > 0)
})

test('id should be only lower case', t => {
  const options = {
    numbers: false,
    lowerCase: true,
    upperCase: false,
    special: false
  }
  const id = generate(50, options)
  t.truthy(id === id.toLowerCase() && id !== id.toUpperCase())
})

test('id should be only upper case', t => {
  const options = {
    numbers: false,
    lowerCase: false,
    upperCase: true,
    special: false
  }
  const id = generate(50, options)
  t.truthy(id === id.toUpperCase() && id !== id.toLowerCase())
})

test('id should be only upper case and lower case', t => {
  const options = {
    numbers: false,
    lowerCase: true,
    upperCase: true,
    special: false
  }
  const id = generate(50, options)
  t.truthy(id !== id.toUpperCase() && id !== id.toLowerCase())
})

test('id should be only upper case and lower case and numbers', t => {
  const options = {
    numbers: true,
    lowerCase: true,
    upperCase: true,
    special: false
  }
  const id = generate(50, options)
  t.truthy(id !== id.toUpperCase() && id !== id.toLowerCase())

  let isNumber = false
  for (let symbol of id) {
    if (parseInt(symbol) > 0) {
      isNumber = true
    }
  }
  t.truthy(isNumber)
})

test('id should be only upper case and lower case and numbers and special characters', t => {
  const options = {
    numbers: true,
    lowerCase: true,
    upperCase: true,
    special: true
  }
  const id = generate(100, options)
  t.truthy(id !== id.toUpperCase() && id !== id.toLowerCase())

  let isNumber = false
  let specialCharacterIndes = -1
  for (let symbol of id) {
    if (parseInt(symbol) > 0) {
      isNumber = true
    }
    if (POSSIBLE.special.indexOf(symbol) > -1) {
      specialCharacterIndes = 1
    }
  }
  t.truthy(isNumber)
  t.truthy(specialCharacterIndes)
})
