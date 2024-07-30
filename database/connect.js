const mongoose = require("mongoose");

const URL = "mongodb://JesteNevim:Hfprbfy3@ac-ogrwhxn-shard-00-00.c618paz.mongodb.net:27017,ac-ogrwhxn-shard-00-01.c618paz.mongodb.net:27017,ac-ogrwhxn-shard-00-02.c618paz.mongodb.net:27017/?ssl=true&replicaSet=atlas-noacqi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual connection string

class dbConnect {
    static async connect() {
        try {
            await mongoose.connect(URL, {
                useNewUrlParser: true, // Add this line
                useUnifiedTopology: true, // Add this line
            });
            console.log("Successfully connected to the database");
        } catch (err) {
            console.error("Error connecting to the database:", err.message);
            throw new Error("Failed to connect to the database");
        }
    }
}

module.exports = dbConnect.connect;