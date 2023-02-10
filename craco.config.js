const path = require("path");

function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths)?.forEach((item) => {
    let key = item.replace("/*", "/(.+)");

    key = `^${key}`;

    const path = paths[item][0].replace("/*", "/$1");

    aliases[key] = `${srcPath}/${path}`;
  });

  return aliases;
}

const TS_CONFIG_PATH = "./tsconfig.paths.json";
const SRC_PATH = "<rootDir>";

module.exports = {
  webpack: {
    alias: {
      "@codename": path.resolve(__dirname, "src"),
    }
  },
  jest: {
    configure: {
      moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH)
    }
  }
};
