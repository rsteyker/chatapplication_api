const { Messages } = require('../models');

const createMessage = async (req, res, next) => {
    try {
        const newMessage = req.body;
        const message = await Messages.create(newMessage)
        res.json(message);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMessage,
};