# Swedish phone number formatter

Format swedish phone numbers according to the specification at <https://www.pts.se/sv/Bransch/Telefoni/Nummerfragor/Telefoninummerplanen/Telefoninummerplanens-disposition/> and <http://www.sprakbruk.fi/media/sprakbruk_2009.2_artikel_14.pdf>

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install --save swedish-phone-number-formatter
```


## Usage

```js
const format = require('swedish-phone-number-formatter');

format('031123456') // => '031-12 34 56'
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/swedish-phone-number-formatter
[npm-image]: https://badge.fury.io/js/swedish-phone-number-formatter.svg
[travis-image]: https://travis-ci.org/jonathanp/swedish-phone-number-formatter.svg
[travis-url]: https://travis-ci.org/jonathanp/swedish-phone-number-formatter