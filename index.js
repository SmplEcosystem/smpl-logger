const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const event = req.query.event;
    if (event) console.log(event);
    res.send();
});

app.listen(3030, () => {
    console.log('App listening on port 3030');
});