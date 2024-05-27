const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user:user123@cluster1.hpavpfc.mongodb.net/");
mongoose.connection.on("connected", () => {
    console.log("Connected");
}
)
mongoose.connection.on("error", (err) => {
    console.log(`${err}`);
}
)

module.exports = mongoose;
