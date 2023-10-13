const winston = require('winston')

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    silly: 6,
    foo: 7,
    bar: 8,
    baz: 9,
    foobar: 10,
    debug: 999,
  },
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red',
  },
}

const logger = winston.createLogger({
  levels: myCustomLevels.levels,
  format: winston.format.json(),
  colorize: true,
  transports: [new winston.transports.Console({level: 'debug'})],
})

module.exports = logger
