import mongoose from 'mongoose';

const schemaUsers = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client',
    }
});
export default mongoose.model<any>('Users', schemaUsers);