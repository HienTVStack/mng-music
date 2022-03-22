const express = require('express');
const router = express.Router();

const schedulesController = require('../app/controllers/SchedulesController');
router.get('/show', schedulesController.show);
router.get('/create', schedulesController.create);
router.post('/add', schedulesController.add);
router.delete('/:id', schedulesController.delete);
router.get('/:id/edit', schedulesController.edit);
router.put('/:id', schedulesController.update);
router.get('/', schedulesController.index);
module.exports = router;