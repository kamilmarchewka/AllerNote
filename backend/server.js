const express = require('express');
const app = express();

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     res.send('<h1>hello route node</h1>');
// });

// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.use('./', (req, res) => {
    res.status(404).send('<h1>Not found</h1>');
})

// app.get('/kalendarz', (req, res) => {
//     res.send('<h1>Calendar</h1>');
// });

// app.get('/alergeny', (req, res) => {
//     res.send('<h1>Allergen</h1>');
// });

// app.get('/login', (req, res) => {
//     res.send('<h1>Login page</h1>');
// });

// app.get('/rejestracja', (req, res) => {
//     res.send('<h1>Register page</h1>');
// });

// app.use((req, res) => {
//     res.status(404).send('<h1>404 not found</h1>');
// })

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})