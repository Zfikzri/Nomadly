const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

try {
  const { withNativeWind } = require('nativewind/metro');
  module.exports = withNativeWind(config, { input: './src/global.css' });
} catch {
  module.exports = config;
}
