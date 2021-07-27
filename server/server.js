import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.get('/', (req,res) => res.send('hello world'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
