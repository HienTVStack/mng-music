const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mong')
const mongooseDelete = require('mongoose-delete');
// mongoose.plugin
const Schedule = new Schema({
    nameMusic: {type: String, default: "Chưa chọn bài hát"},
    name: {type: String, default: "Giấu tên"},
    age: {type: String, default: "Chưa nhập tuổi"},
    gender: {type: String, default: "Chưa xác nhận giới tính"},
},{
    timestamps: true
});

Schedule.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Schedule', Schedule);