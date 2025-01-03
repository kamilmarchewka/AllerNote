const express = require('express');
const logEvents = require('./utils/logEvents');
const app = express();

app.use((req, res, next) => {
    logEvents(`${req.method}\t${req.url}`);
    next();
});

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.use('*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>');
});

const port = process.env.PORT || 3001;
app.listen(port, () => logEvents(`Log event emitted`));