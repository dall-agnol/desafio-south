import mongoose from 'mongoose';
const uri = "mongodb+srv://dallagnol:pedepano10@cluster0.dkjhj.mongodb.net/tj-treinamento?retryWrites=true&w=majority";

const connect = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });

    const connection = mongoose.connection;
    connection.on('error', err => console.log(err));
    connection.on('open', () => console.log('sucesso ao conectar ao banco de dados.'))
}

export default connect;