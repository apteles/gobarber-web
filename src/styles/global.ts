import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background: #312e38;
    min-height:100vh;
    color: #FFF;
    text-rendering: optimizeLegibility ;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,input,button{
    font: 1.6rem 'Roboto Slab', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  button{
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }


  #root{
    /* max-width:1440px;
    margin: 0 auto; */
  }

`;
