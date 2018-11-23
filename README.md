RandIdGenerator by [@lukasz-okuniewicz](http://github.com/lukasz-okuniewicz)
=========

Random string generator.

How to use:
```
npm install rand-id-generator
```

then:
```javascript
const randIdGenerator = require('rand-id-generator')
// or
import randIdGenerator from 'rand-id-generator'
```

```javascript
// Default length is 10
randIdGenerator()  // '>/3(:WyQsK'
```

```javascript
// First parameter it takes is length of the random string
randIdGenerator(3)  // ':X2'
randIdGenerator(24) // 'FcpBgn{r(njFt0!N9#pj*PJN'
```

```javascript
// Second parameter are options (default all of them are true)
const options = {
    numbers: false,
    lowerCase: false,
    upperCase: true,
    special: false
}
randIdGenerator(5, options) // 'AJDOP'
```

```javascript
// You can pass only those which you want to be true
const options = {
    lowerCase: true
}
randIdGenerator(5, options) // 'otfmw'
```

```javascript
const options = {
    numbers: true,
    lowerCase: true
}
randIdGenerator(5, options) // 'e14op'
```
