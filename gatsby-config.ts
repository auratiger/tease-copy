import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
   siteMetadata: {
      title: `tea-website`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
   // If you use VSCode you can also use the GraphQL plugin
   // Learn more at: https://gatsby.dev/graphql-typegen
   graphqlTypegen: true,
   plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: path.join(__dirname, "src", "assets", "images"),
         },
      },
      {
         resolve: `gatsby-plugin-webfonts`,
         options: {
            fonts: {
               google: [
                  {
                     family: "Roboto",
                     variants: ["300", "400", "500"],
                  },
                  {
                     family: "Open Sans Condensed",
                     variants: ["300", "700"],
                  },
               ],
            },
         },
      },
   ],
};

export default config;
