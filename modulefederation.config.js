const deps = require("./package.json").dependencies;

module.exports = {
  name: "ChildApp",
  exposes: {
    "./ChildApp": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};