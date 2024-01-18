import axios from 'axios';
const axios = require('axios');
const Metrics = require('./Backend/models/metricsModel.js');

const apiKey = 'oi2843317olbxjdooz5gs46ry73lj12quql38ig8k3yfiyd18a860u537m1e';
const baseUrl = 'https://www.commodities-api.com/api/';

const fetchDataFromCommoditiesAPI = async () => {
  const commodities = ['BRENTOIL', 'WTIOIL', 'TGJ23', 'TGH23', 'NG', 'EU-NG', 'UK-NG'];
  try {
    for (const commodity of commodities) {
      const response = await axios.get(`${baseUrl}latest?access_key=${apiKey}&base=${commodity}`);
      // Process and store the data in the Metrics model
      const commodityData = response.data;
      // Assuming a structure for commodityData and mapping to the Metrics model
      const metricsData = new Metrics({
        // Map the response data to the model fields
        // e.g., brentOil: commodityData.rates.BRENTOIL (if applicable)
      });
      await metricsData.save();
    }
  } catch (error) {
    console.error('Error fetching data from Commodities API', error);
  }
};

module.exports = fetchDataFromCommoditiesAPI;
