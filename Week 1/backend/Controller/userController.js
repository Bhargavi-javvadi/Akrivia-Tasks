const { db } = require('../Database/Dbconnect.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtUtils');

const registerUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {  // Check for the correct variable
        return res.status(400).send('Name and password are required.');
    }

    try {
        const connection = await db();

        // Check if the user already exists
        const checkUserSql = 'SELECT * FROM task1 WHERE name = ?';
        const [existingUser] = await connection.execute(checkUserSql, [name]);

        if (existingUser.length > 0) {
            return res.status(400).send('User with this name already exists.');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);  // Use password variable

        // Insert new user
        const insertUserSql = 'INSERT INTO task1 (name, password) VALUES (?, ?)';
        await connection.execute(insertUserSql, [name, hashedPassword]);

        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).send('Error registering user.');
    }
};

const loginUser = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {  // Check for the correct variable
        return res.status(400).send('Name and password are required.');
    }

    try {
        const connection = await db();

        // Fetch user by name
        const sql = 'SELECT * FROM task1 WHERE name = ?';
        const [rows] = await connection.execute(sql, [name]);

        if (rows.length === 0) {
            return res.status(401).send('User not found.');
        }

        const user = rows[0];

        // Compare passwords
        const isValid = await bcrypt.compare(password, user.password);  // Use password variable
        if (!isValid) {
            return res.status(401).send('Invalid password.');
        }

        // Generate token
        const token = generateToken({ name: user.name });

        // Send token in cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.send('User logged in successfully');
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).send('Error logging in user.');
    }
};

module.exports = { registerUser, loginUser };
