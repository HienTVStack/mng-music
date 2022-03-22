const newsRouter = require('./new');
const scheduleRouter = require('./schedule');

function route(app) {
    app.use('/news', newsRouter)
    app.use('/schedules', scheduleRouter);
}

module.exports = route;