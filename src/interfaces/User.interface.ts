
import mongoose from 'mongoose';

export default interface UserDoc extends mongoose.Document {
    email: {
        type: string,
        unique: boolean,
        required: boolean
    },
    password: {
        type: string,
        required: boolean
    },
    type: {
        type: string
    }
}