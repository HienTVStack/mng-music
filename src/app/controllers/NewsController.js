class NewsController {
    index(req, res, next) {
        res.send('Hello')
    }
}

module.exports = new NewsController;