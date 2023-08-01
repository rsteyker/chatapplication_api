const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;

        //Hashear el password
        const passwordHashed = await bcrypt.hash(password, 10);
        const user = await Users.create({
            firstname,
            lastname,
            username,
            email,
            password: passwordHashed,
        })
        res.json(user);

    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email } })
        console.log(user);
        if (!user) {
            console.log('User not found')
            return next({
                status: 400,
                errorName: 'Invalid credentials',
                error: 'Incorrect email / password'
            })
        }

        //user exist
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Email / password son incorrectos' })
        }

        const { id, firstname, lastname, username, profileImage, validEmail, createdAt, updatedAt } = user;

        // Generar token
        const token = jwt.sign({ id, firstname, lastname, username, email }, process.env.SECRET_WORD, {
            algorithm: 'HS512',
            expiresIn: '30m'
        });

        res.json({
            id,
            firstname,
            lastname,
            username,
            profileImage,
            validEmail,
            createdAt,
            updatedAt,
            token,
        });

    } catch (error) {
        next(error);
    }
};

const getFindAllUsers = async (req, res, next) => {
    try {
        const user = await Users.findAll()
        res.json(user);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    loginUser,
    getFindAllUsers,
};