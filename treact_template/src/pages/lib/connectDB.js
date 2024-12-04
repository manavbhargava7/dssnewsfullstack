import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL; // Ensure this is defined in .env.local
console.log(DATABASE_URL)

if (!DATABASE_URL) {
    throw new Error("Please define the DATABASE_URL environment variable in .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(DATABASE_URL, options).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}


export default connectDB;
