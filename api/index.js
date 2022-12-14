const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('./routes/index.js')(app);

app.listen(3001, () => {
    console.log('Server listening on port 3001')
})

module.exports = app;