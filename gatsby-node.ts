const path = require("path");

// Sets up Webpack import aliases. If using typescript,
// the corresponding location values should be specified in the 'paths' property of the tsconfig.json file
exports.onCreateWebpackConfig = ({ actions }) => {
   actions.setWebpackConfig({
      resolve: {
         alias: {
            "@src": path.resolve(__dirname, "src"),
            "@homepage": path.resolve(__dirname, "src/modules/homepage"),
            "@common": path.resolve(__dirname, "src/modules/common"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@mixins": path.resolve(__dirname, "src/mixins"),
         },
      },
   });
};
