import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.onBackground};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; */
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
    h1 {
        font-size: 2.5em;
        font-weight: 600;
        margin: 5px 0px 20px 0px;
    }
    p {
        font-size: 1em;
        color: ${({ theme }) => theme.color.font};
        opacity: 0.75;
        padding: 0px;
        margin: 5px 0px;
    }
    img {
        max-width: 100%;
    }
`