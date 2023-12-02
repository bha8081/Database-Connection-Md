const app = require('./app.js');


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}...`);
})