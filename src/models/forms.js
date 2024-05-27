const mongoose = require('../configurations/formsConfig');

const formsSchema = new mongoose.Schema({
  date: String,
  startTime: String,
  endTime: String,
  employeeName: String,
  employeeId: String,
  workDone: String,
});

module.exports = mongoose.model('Forms', formsSchema);
