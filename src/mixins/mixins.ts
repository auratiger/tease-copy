import { css } from "styled-components";

export const flex = ({
   justify = "center",
   align = "center",
   wrap = "nowrap",
   direction = "row",
}: {
   justify?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
   align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
   wrap?: "nowrap" | "wrap" | "wrap-reverse";
   direction?: "row" | "row-reverse" | "column" | "column-reverse";
} = {}) => css`
   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;

   flex-direction: ${direction};
   justify-content: ${justify};
   align-items: ${align};
   flex-wrap: ${wrap};
`;
