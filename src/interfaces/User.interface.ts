
import mongoose from 'mongoose';

export default interface UserDoc extends mongoose.Document {
    email: {
        type: string,
        required: boolean
    },
    password: {
        type: string,
        required: boolean
    },
    role: {
        type: string
    }
}