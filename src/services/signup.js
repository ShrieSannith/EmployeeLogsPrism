const User = require('../models/userDetails');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password } = userData;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const error = new Error('Email already exists');
        error.code = 'EMAIL_EXISTS';
        throw error;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        role: 'customer',
    });

    // Save the new user to the database
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser };
