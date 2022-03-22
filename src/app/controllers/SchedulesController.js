const Schedule = require('../models/Schedule');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class SchedulesController {
// [GET /schedule]
    index(req, res, next) {
        Schedule.find({})
            .then(schedule => {
                res.render('./index', {
                    schedule: multipleMongooseToObject(schedule)
                })
            })
            .catch(next);
    }
    // [POST] /schedule
    create(req, res, next) {
        res.render('schedules/create');
    }
    // [GET] /schedules/show
    show(req, res, next) {
        Schedule.find({})
            .then(schedule => {
                res.render('schedules/show', {
                    schedule: multipleMongooseToObject(schedule)
                })
            })
            .catch(next);
    }
    add(req, res, next) {
        const formData = req.body;
        const schedule = new Schedule(formData);
        schedule.save()
            .then(() => res.redirect('/schedules'))
            .catch(error => {

            });
    }
    delete(req, res, next) {
        Schedule.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // [PUT] /schedules/:id
    update(req, res, next) {
        Schedule.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/schedules/show'))
            .catch(next);
    }
    // [GET]
    edit(req, res, next) {
        Schedule.findById(req.params.id)
            .then(schedule => res. render('schedules/edit', {
                schedule: mongooseToObject(schedule)
            }))
            .catch(next)
    }

}

module.exports = new SchedulesController;


