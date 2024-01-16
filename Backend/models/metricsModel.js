const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema({
  dateRecorded: { type: Date, default: Date.now },
  // Add more fields here based on the data structure you're fetching
  // Example:
  brentOil: Number,
  wtiOil: Number,
  // Add fields for natural gas and other commodities as needed
});

const Metrics = mongoose.model('Metrics', metricsSchema);

module.exports = Metrics;
