"use strict";

var express = require('express');

var cors = require('cors');

var apiRoutes = require('./routes');

var morgan = require('morgan');

var _require = require('./routes/errors.routes'),
    errorRoutes = _require.errorRoutes;

require('dotenv').config(); //creamos la instancia


var app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
var PORT = process.env.PORT || 8000; //Agrupar todas las Rutas

apiRoutes(app);
app.use('/', function (req, res) {
  res.send('Bienvenido a mi servidor');
}); // Agrupar todo los manejador de errorHandler

errorRoutes(app);
app.listen(PORT, function () {
  console.log("Servidor escuchando en el puerto ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
