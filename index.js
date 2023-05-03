const app = require('./app.js')
const logger = require('./utils/logger')
const {PORT} = require('./utils/config')

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})