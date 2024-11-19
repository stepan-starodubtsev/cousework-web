const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const authRouter = require('./routes/authRouter');
const newsRouter = require('./routes/newsRouter');
const bookRouter = require('./routes/bookRouter');
const visitorRouter = require('./routes/visitorRouter');
const userRouter = require('./routes/userRouter');
const photoRouter = require('./routes/photoRouter');

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);
app.use('/api/books', bookRouter);
app.use('/api/visitors', visitorRouter);
app.use('/api/users', userRouter);
app.use('/photos', photoRouter);

app.get('/', (req, res) => res.send('API is running...'));

module.exports = app;
