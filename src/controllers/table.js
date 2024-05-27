const formService = require('../services/table')

async function getForm(req, res) {
    try {
        const form = await formService.getForm();
        res.json(form);
        
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getForm };