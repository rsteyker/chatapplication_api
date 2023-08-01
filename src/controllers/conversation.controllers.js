const { Conversations, Participants, Messages, Users } = require('../models');

const createConversation = async (req, res, next) => {
    try {
        const { title, createdBy, participant, type } = req.body;

        //Creo la conversacion
        const conversation = await Conversations.create({ title, createdBy, type });

        // Obtener id de la conversación
        const { id } = conversation;

        //Agregar participantes en la tabla pivote
        const participantsArray = participant.map(participant => ({
            userId: participant,
            conversationId: id
        }));
        participantsArray.push({ userId: createdBy, conversationId: id });
        await Participants.bulkCreate(participantsArray)

        res.status(201).send()


    } catch (error) {
        next(error);
    }
};

const getAllConversationUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const conversation = await Participants.findAll({
            attributes: {
                exclude: ['createdBy']
            },
            where: { userId: id },
            include: {
                model: Conversations
            }
        })
        res.json(conversation);

    } catch (error) {
        next(error);
    }
};

const getConversationParticipantMessages = async (req, res, next) => {
    try {
        const { id } = req.params;
        const conversation = await Conversations.findByPk(id, {
            attributes: {

            },
            include: [
                {
                    model: Participants,
                },
                {
                    model: Messages,
                    attributes: {
                        exclude: ['conversationId']
                    }
                }
            ]
        })
        res.json(conversation);

    } catch (error) {
        next(error);
    }
}

const deleteConversation = async (req, res, next) => {
    try {
        const { id } = req.params;

        //Elinar todos los registros del participants
        await Conversations.destroy({ where: { id } });
        res.status(204).send();

    } catch (error) {
        next(error);
    }
}


module.exports = {
    createConversation,
    getAllConversationUser,
    getConversationParticipantMessages,
    deleteConversation,
};