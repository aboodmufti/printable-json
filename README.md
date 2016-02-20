# printable-json


Print JSON objects and arrays in a nice way (with colors).

## Install

```sh
$ npm install printable-json
```

## Example usage

```js
var printable = require(printable-json)

var obj = { a: "A", b:{a2:"A2", b2: [1,{a3:"A3"},3,"4"], c2: {a3: "A3",b3: {a4: "A4"}}}, c: 143}

console.log(printable.toString(obj))
```
#### Example output

![alt text](https://raw.githubusercontent.com/aboodmufti/printable-json/master/example.png )


## Author

Abdulrahman Mufti

## License

[MIT](LICENSE)
