const User = require('../models/userDetails');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');
const { verifyToken } = require('../utils/authMiddleware');

async function login(email, password) { 
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error('Could not find user with email');
        }
        // console.log(password, existingUser.name);

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) { 
            throw new Error('password mismatch');
        }
        const token = generateToken(existingUser);
        return token;
        // console.log(token);
        // localStorage.setItem('Token', token);

    } catch (e) {
        throw new Error(e);
    }
}

async function refreshToken(Oldtoken) {
    try {
        const decodedToken = await verifyToken(Oldtoken);
        if (!decodedToken) {
            throw new Error('Invalid or expired token');
        }
        // console.log(decodedToken);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            throw new Error('Could not find any user');
        }
        const newToken = generateToken(user);
        return newToken;
    } catch (error) {
        throw new Error(error); // Propagate the error message
    }
}

module.exports = {
    login, refreshToken
}