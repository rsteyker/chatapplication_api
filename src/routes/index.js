const userRouter = require('./user.routes');
const conversationsRouter = require('./conversations.routes');
const messagesRouter = require('./message.routes');

const apiRoutes = (app) => {
    app.use(userRouter);
    app.use(conversationsRouter);
    app.use(messagesRouter);

}


module.exports = apiRoutes;