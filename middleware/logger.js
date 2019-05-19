function log(req, res, next) {
    console.log('logging is done....');
    next()
}

module.exports = log;