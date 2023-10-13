const logger = require('./logger.js')

const variable = {
  id: 123,
}

logger.info('variable', variable)
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
