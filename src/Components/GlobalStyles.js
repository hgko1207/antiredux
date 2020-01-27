import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    body {
        background-color: #ecf0f1;
    }
`;

export default globalStyles;
