const path = require("path");

// Sets up Webpack import aliases. If using typescript,
// the corresponding location values should be specified in the 'paths' property of the tsconfig.json file
exports.onCreateWebpackConfig = ({ actions }) => {
   actions.setWebpackConfig({
      resolve: {
         alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@mixins": path.resolve(__dirname, "src/mixins"),
         },
      },
   });
};
