const express = require('express');
const { appendFile } = require('fs');
const path = require('path');

const PORT = 1234;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, () => {
    console.log(`Arthur's jank website running on http://localhost:${PORT}`);
});