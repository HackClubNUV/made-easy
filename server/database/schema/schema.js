import mongoose from 'mongoose';
const { Schema } = mongoose;
export const UserSchema = new Schema({
    DiscordID:  { 
        type: String,
        required: true,
        unique: true
    }, 
    fullname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    A1:{
        type: Boolean,
        required: true,
        default: false,
    },
    A2:{
        type: Boolean,
        required: true,
        default: false,
    },
    A3:{
        type: Boolean,
        required: true,
        default: false,
    },
    A4:{
        type: Boolean,
        required: true,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('Users', UserSchema);
export default User;