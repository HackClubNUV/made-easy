import mongoose from 'mongoose';
import dotnev from 'dotenv';
dotnev.config();
import User from './schema/schema.js';
export const conn = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }),
        console.log("Database connected!");
    }
    catch(e){
        console.log(e);
    }
}

User.create({
    DiscordID: "1234567890",
    A1: true,
    A2: true,
    A3: true,
    A4: true,
})