module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['expo-router/babel'], 
      plugins: ['module:react-native-dotenv'],// Ensure this is present
    };
  };
  