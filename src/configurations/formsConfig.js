const mongoose = require('mongoose');

const forms = mongoose.createConnection('mongodb+srv://user:user123@cluster1.hpavpfc.mongodb.net/forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

forms.on('connected', () => {
  console.log('Connected to forms');
});

forms.on('error', (err) => {
  console.log(`forms connection error: ${err}`);
});

module.exports = mongoose;
