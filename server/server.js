import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
import {conn} from './database/connection.js';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
conn();

// Import routes here
import {Router} from './routes/webhook.js'
import {User} from './routes/User.js'
app.use('/webhook', Router);
app.use('/progress', User);
app.get('/', (req,res) => res.send('hello world'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
