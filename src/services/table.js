const Form = require('../models/forms');

async function getForm() {
    const Forms = await Form.find({});
    return Forms;
}

module.exports = { getForm };