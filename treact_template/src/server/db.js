const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://awwang629:ZBrlLo1BFLqiIGM6@cluster0.kdtr9.mongodb.net/%3Cdatabase_name%3E?retryWrites=true&w=majority");
        console.log("MongoDB Atlas connected!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
