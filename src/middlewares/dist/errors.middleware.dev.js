"use strict";

var _require = require('sequelize'),
    ValidationError = _require.ValidationError,
    DatabaseError = _require.DatabaseError,
    ConnectionError = _require.ConnectionError,
    ConnectionRefusedError = _require.ConnectionRefusedError,
    ConnectionTimedOutError = _require.ConnectionTimedOutError,
    InvalidConnectionError = _require.InvalidConnectionError; // Middleware para loggear errors


var logError = function logError(err, req, res, next) {
  console.log(err);
  next(err);
}; //middleware para gestionar el error de ORM


var ormHandleError = function ormHandleError(err, req, res, next) {
  if (err instanceof ConnectionError || err instanceof ConnectionRefusedError || err instanceof ConnectionTimedOutError || err instanceof InvalidConnectionError) {
    return res.status(409).json({
      error: 'Database connection error',
      message: err.name
    });
  }

  if (err instanceof ValidationError) {
    res.status(400).json({
      name: err.name,
      message: err.message,
      errors: err.errors
    });
  }

  if (err instanceof DatabaseError) {
    res.status(409).json({
      name: err.name,
      message: err.message,
      errors: err.errors
    });
  }

  next(err);
}; // midleware error general


var errorHandler = function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.errorName,
    message: err.error
  });
}; //manejar el error 404


var notFoundErrorHandler = function notFoundErrorHandler(req, res, next) {
  res.status(404).json({
    error: 'Not Found',
    message: "El backend se encuentra trabajando, pronto tendremos esta ruta"
  });
};

module.exports = {
  logError: logError,
  ormHandleError: ormHandleError,
  errorHandler: errorHandler,
  notFoundErrorHandler: notFoundErrorHandler
};
//# sourceMappingURL=errors.middleware.dev.js.map
