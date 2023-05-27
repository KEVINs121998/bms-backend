// requiring the mongoose package
const mongoose = require("mongoose");

// mongodb provided connection url
const connectionString = `mongodb+srv://kevinshah12jan:${encodeURIComponent(
  "kevin"
)}@cluster0.7vomsbw.mongodb.net/?retryWrites=true&w=majority`;

// custom function made to connect the mongodb database and passing up a callback function
const connectDb = (server) => {
  // connecting to the database and then logging out the db-connected message after that the server call back function is passed which will be called and will connect the app to server
  mongoose
    .connect(connectionString, { useNewUrlParser: true })
    .then((res) => console.log("db-connected"))
    .then(() => server())
    .catch((err) => console.log(err));
};

// exporting the connect db method to the app for usage
module.exports = connectDb;
