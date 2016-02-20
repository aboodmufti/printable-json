# request_logger


Request logger for Express applications.

## Install

```sh
$ npm install request_logger
```

## Usage

```js
var http = require('http');
var express = require('express');
var logger = require('request_logger');
var app = express();

app.use(logger.start)
```

## Author

Abdulrahman Mufti

## License

[MIT](LICENSE)
