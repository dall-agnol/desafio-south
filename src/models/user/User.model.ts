import mongoose from 'mongoose';
import UserInterface from '../../interfaces/User.interface';

const schemaUsers = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    }
});
export default mongoose.model<UserInterface>('Users', schemaUsers);