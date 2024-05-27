const User = require('../models/userDetails');

async function getUsers() {
    const users = await User.find({});
    return users;
}

module.exports = { getUsers };