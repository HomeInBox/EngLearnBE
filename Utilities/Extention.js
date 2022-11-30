const moment = require('moment')


const method = {
    DateTimeNow()
    {
        return moment().format('yyyy-MM-DD:hh:mm:ss');
    }
}

module.exports = {...method}