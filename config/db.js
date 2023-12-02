const mongoose = require("mongoose");

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL)

/*  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to db: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  } */
 
  .then((conn) => {
    console.log(`Connected to the database: ${conn.connection.host}`)
  })
  .catch((err) => {
    console.log("ERROR:", err.message)
    process.exit(1)
  })

}

module.exports = connectToDb;






module.exports = connectToDb