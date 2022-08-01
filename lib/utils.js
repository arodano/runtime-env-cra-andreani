const constants = {
  DEVELOPMENT: 'development',
  runtimeConfigPath: 'window.',
};

const generateJSON = (pathName, config) =>
  `${constants.runtimeConfigPath + pathName} = ${JSON.stringify(config)};`;

module.exports = {
  generateJSON,
  constants,
};
