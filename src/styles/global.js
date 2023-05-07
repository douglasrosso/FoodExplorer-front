import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;

        *::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        *::-webkit-scrollbar-thumb {
            width: 6px;
            background-color: transparent;
            border-radius: 80px;
            box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.COLORS.WHITE};
            border: solid 10px transparent;
        }
        
        *::-webkit-scrollbar {
            width: 22px;
            height: 22px;
            border-radius: 9999px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        input[type=number] {
        -moz-appearance: textfield;
        }   

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    :root {
        font-size: 62.5%;
    }

    
`;
