var mongoose = require('mongoose');

var CatalogSchema = new mongoose.Schema({
  name: String,
  display: Boolean,
  intro:String,
  link:String,
  price_info:String,
  specs: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Items', CatalogSchema);
