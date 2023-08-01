const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const morgan = require('morgan');
const { errorRoutes } = require('./routes/errors.routes');
require('dotenv').config();



//creamos la instancia
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

const PORT = process.env.PORT || 8000;

//Agrupar todas las Rutas
apiRoutes(app);

app.use('/', (req, res) => {
    res.send('Bienvenido a mi servidor')
})

// Agrupar todo los manejador de errorHandler
errorRoutes(app);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
