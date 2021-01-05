const express = require('express');
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'hongweb', 'build')));

app.listen(PORT, ()=> {
    console.log(`Server Listening on port ${PORT}`);
});

