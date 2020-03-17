# Swedish phone number formatter

Format swedish phone numbers according to the specification at <https://www.pts.se/sv/Bransch/Telefoni/Nummerfragor/Telefoninummerplanen/Telefoninummerplanens-disposition/> and <http://www.sprakbruk.fi/media/sprakbruk_2009.2_artikel_14.pdf>

![Tests][tests-badge]
[![NPM version][npm-image]][npm-url]

## Install

```
$ npm install --save swedish-phone-number-formatter
```

## Usage

```js
const format = require("swedish-phone-number-formatter");

format("031123456"); // => '031-12 34 56'
```

## License

MIT © [Jonathan Svenheden](https://github.com/svenheden)

[npm-url]: https://npmjs.org/package/swedish-phone-number-formatter
[npm-image]: https://badge.fury.io/js/swedish-phone-number-formatter.svg
[tests-badge]: https://github.com/svenheden/swedish-phone-number-formatter/workflows/Tests/badge.svg
