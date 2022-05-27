const mongoose = require('mongoose');


// Conexção com MongoDB Atlas

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.u8gpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
        .then(() => console.log("MongoDB Atlas conectado!"))
        .catch((err) => console.log(err))
};

module.exports = connectToDb;