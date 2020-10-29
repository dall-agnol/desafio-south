import mongoose from 'mongoose';
import StoreInterface from '../../interfaces/Store.interface';

const schemaStores = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
export default mongoose.model<StoreInterface>('Store', schemaStores);