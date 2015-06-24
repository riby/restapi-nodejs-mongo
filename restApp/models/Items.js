var mongoose = require('mongoose');

var CatalogSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Items', CatalogSchema);
