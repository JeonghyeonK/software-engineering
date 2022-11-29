const { Schema, model, Types} = require('mongoose')

const EmploySchema = new Schema({
    worNo: { type: String, required: true },
    worId: { type: String },
    worPwd: { type: String },
    worName: { type: String },
    worTel: { type: String },
    worAddr: { type : String },
    worPosition: { type : String }
    }, 
    { timestamps: true }
);

const Empl = model('empl', EmploySchema);
module.exports = { Empl };