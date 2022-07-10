const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = require('./models');

// Роуты
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, (req, res) => {
        console.log('Server started');
    });
});


