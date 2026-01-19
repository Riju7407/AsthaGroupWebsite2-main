require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const databaseconnect = require('../../server/config/databaseConfig');
const { authRouter } = require('../../server/router/authRouter');

const app = express();

databaseconnect();

const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000', 'https://*.vercel.app'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.json({ message: 'EIRS Technology API', status: 'running' });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

module.exports = app;
