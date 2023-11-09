const logger = require('./logger.js')

const variable = {
  id: 123,
}

const params = {
  id: 1,
  testId: 2,
  dbId: 3,
  variable: 'apple',
}

const childLogger = logger.child({requestId: '451'})

logger.info('variable', variable)
childLogger.info('variable', variable)

logger.error('error', variable)
logger.debug('debug', variable)
logger.silly('silly', variable)

logger.foo('foo', variable)
logger.foobar('foobar', variable)

// https://stackoverflow.com/a/65131032/609707
logger.info('📕: error message')
logger.info('📙: warning message')
logger.info('📗: ok status message')
logger.info('📘: action message')
