const Forms = require('../models/forms');

async function createFormsObject(formsData) {
  const { date, startTime, endTime, employeeName, employeeId, workDone } = formsData;

  // Create a new forms object
  const formObject = new Forms({
    date, startTime, endTime, employeeName, employeeId, workDone,
  });

  const savedForms = await formObject.save();
  return savedForms;
}

module.exports = { createFormsObject };