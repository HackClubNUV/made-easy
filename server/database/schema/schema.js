import mongoose from 'mongoose';
const { Schema } = mongoose;
export const UserSchema = new Schema({
    DiscordID:  { 
        type: String,
        required: true,
        unique: true
    }, 
    A1:{
        type: Boolean,
    },
    A2:{
        type: Boolean,
    },
    A3:{
        type: Boolean,
    },
    A4:{
        type: Boolean,
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