const mongoose = require("mongoose");

const connectDatabase = () => {
    const uri = process.env.DB_URI;
    mongoose
        .set('strictQuery', false)
        .connect(uri, {})
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
}

module.exports = connectDatabase;