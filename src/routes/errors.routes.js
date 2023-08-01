const {
    logError,
    ormHandleError,
    errorHandler,
    notFoundErrorHandler,
} = require("../middlewares/errors.middleware")


const errorRoutes = (app) => {
    app.use(logError);
    app.use(ormHandleError);
    app.use(errorHandler);
    app.use(notFoundErrorHandler);
}

module.exports = {
    errorRoutes,
};