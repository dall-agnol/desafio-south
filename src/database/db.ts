import mongoose from 'mongoose';
const uri = "mongodb+srv://dallagnol:pedepano10@cluster0.dkjhj.mongodb.net/tj-treinamento?retryWrites=true&w=majority";

const connect = () => {
    let promise = new Promise((resolve, reject) => {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
    
        const connection = mongoose.connection;
        connection.on('error', err => reject(err));
        connection.on('open', () => resolve())
    });

    return promise;
    
}

export default connect;