import mongoose from 'mongoose';

export default interface StoreInterface extends mongoose.Document {
    name: {
        type: string,
        required: boolean
    },
    description: {
        type: string
    },
    quantity: {
        type: Number,
        required: boolean
    },
    price: {
        type: Number,
        required: boolean
    }
}