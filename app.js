const express = require('express');
const db = require('./db');
const PORT = 8000
const app = express();

app.use(express.json());

const tokenRouter = require('./routes/tokens');
app.use('/tokens', tokenRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
module.exports = app;
