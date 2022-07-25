const path = require("path");

// Sets up Webpack import aliases. If using typescript,
// the corresponding location values should be specified in the 'paths' property of the tsconfig.json file
exports.onCreateWebpackConfig = ({ actions }) => {
   actions.setWebpackConfig({
      resolve: {
         alias: {
            "@components": path.resolve(__dirname, "src/components"),
         },
      },
   });
};
