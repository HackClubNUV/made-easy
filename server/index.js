const express = require("express");
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.get('/', (req,res) => res.send('hello world'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
