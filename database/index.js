const mongoose = require('mongoose');

const db = (database) => (
  mongoose.connect(`mongodb://database:27017/collin`, { useNewUrlParser: true }, { useUnifiedTopology: true })
);
module.exports = db;
