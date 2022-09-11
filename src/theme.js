import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
      --bg: ${({ theme }) => theme.bg};
      --ele: ${({ theme }) => theme.ele};
      --text: ${({ theme }) => theme.text};
      --shadow: rgba(0, 0, 0, 0.1);
   }    
`
export const darkTheme = {
	bg: 'hsl(207, 26%, 17%)',
	ele: 'hsl(209, 23%, 22%)',
	text: 'hsl(0, 0%, 100%)'
};

export const lightTheme = {
   bg: 'hsl(0, 0%, 98%)',
	ele: 'hsl(0, 0%, 100%)',
	text: 'hsl(200, 15%, 8%)'
};