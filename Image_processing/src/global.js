import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-3xs: 10px;
--font-size-xs: 12px;
--font-size-2xs: 11px;
--font-size-8xs: 5px;

/* Colors */
--color-whitesmoke: #f7f0f0;
--color-blue: rgba(7, 2, 248, 0.71);
--color-white: #fff;
--color-black: #000;
--color-gainsboro-100: #d9d9d9;
--color-gainsboro-200: rgba(217, 217, 217, 0);
--color-mediumblue: #1f1be8;
--color-yellow: #dde11a;

/* Border radiuses */
--br-11xl: 30px;
--br-3xs: 10px;
--br-xl: 20px;

}
`;
}
