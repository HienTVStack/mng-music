const express = require('express');
const router = express.Router();

const schedulesController = require('../app/controllers/SchedulesController');

router.get('/show', schedulesController.show);
router.get('/trash', schedulesController.trashSchedules);
router.get('/create', schedulesController.create);
router.post('/add', schedulesController.add);
router.post('/handle-schedules-action', schedulesController.handleSchedulesAction);
router.delete('/:id', schedulesController.delete);
router.patch('/:id/restored', schedulesController.restore);
router.get('/:id/edit', schedulesController.edit);
router.put('/:id', schedulesController.update);
router.get('/', schedulesController.index);
module.exports = router;