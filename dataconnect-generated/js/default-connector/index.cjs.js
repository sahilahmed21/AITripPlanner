const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ai-trip-planner-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

