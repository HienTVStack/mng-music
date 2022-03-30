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
        Promise.all([Schedule.find({}), Schedule.countDocumentsDeleted()])
            .then(([schedule, deletedCount]) => {
                res.render('schedules/show', {
                    deletedCount,
                    schedule: multipleMongooseToObject(schedule)
                })
                //console.log(deletedCount)
            }) 
            .catch(next);
    }
    // [GET] /schedules/trash
    trashSchedules(req, res, next) {
        Schedule.findDeleted({})
            .then(schedule => {
                res.render('schedules/trash', {
                    schedule: multipleMongooseToObject(schedule)
                })
            })
            .catch(next);
    }


    add(req, res, next) {
        const formData = req.body;
        const schedule = new Schedule(formData);
        schedule.save()
            .then(() => res.redirect('/schedules/show'))
            .catch(error => {

            });
    }
    delete(req, res, next) {
        Schedule.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /schedules/:id/restored
    restore(req, res, next) {
        Schedule.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
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
    // [POST] /schedules/handle-schedules-action
    handleSchedulesAction(req, res, next) {
        switch (req.body.action) {
            case 'deleted':
                Schedule.delete({_id: req.body.scheduleIds})
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
        
            default:
                res.redirect('back');
                break;
        }
    }
}

module.exports = new SchedulesController;


