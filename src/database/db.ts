import mongoose from 'mongoose';
const uri = "mongodb+srv://dallagnol:desafio-south@cluster0.vcid0.mongodb.net/desafio-south?retryWrites=true&w=majority"
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