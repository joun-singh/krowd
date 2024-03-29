import { createTheme } from "@mui/material";


export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 426,
      sm: 769,
      md: 1025,
      lg: 1441,
      xl: 2160,
    },
  },
  palette: {
    common:{
        black:"#000",
        white:"#fff",
        navBar: "#fff"
    },
    primary:{
        main:"#00838F",
        
    },
    secondary:{
        main:"#000",
        light:"#00838fc4",
        dark:"#00838fc4",
        contrastText:"#fff"
    },
    text:{
        primary:"#2B2C2D",
        secondary:"#5C5C5C",
        blue:"#2F80ED",
        error:"#EB5757"
    }
  },

  mixins: {
    toolbar: {
      minHeight: "inherit",
    },
  },

  typography: {
    htmlFontSize:16,
    pxToRem : size => `${(size / 16)}rem`,
    pxToVw : size => `${(size / 14.4)}vw`,
    fontFamily: "'Roboto', sans-serif",
    boxSizing:"border-box",
    h1:{
      fontFamily: "'Roboto', sans-serif",
      fontSize : "2.125rem"//34
      
    },
    h2:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1.625rem",//26
        fontWeight:400
    },
    h3:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1.5rem"//24
    },
    h4:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1.375rem"//22
    },
    h5:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1.25rem"//20
    },
    h6:{
        fontFamily: "'Roboto', sans-serif",
      fontSize:"1.125rem"//18
    },
    subtitle1:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1.125rem",//18
        fontWeight:600,
        color:"#2B2C2D"

    },
    subtitle2:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1rem",//16
        fontWeight:600,
        color:"#2B2C2D"
    },
    subtitle3:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"0.875rem",//14
        fontWeight:600,
        color:"#2B2C2D"
    },
    body1:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"1rem",//16
        fontWeight:500,
        color:"#2B2C2D"

    },
    body2:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"0.9375rem",//15
        fontWeight:500,
        color:"#2B2C2D"
    },
    body3:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"0.875rem",//14
        fontWeight:500,
        color:"#2B2C2D"
    },
    body4:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"0.875rem",//14
        fontWeight:400,
        color:"#2B2C2D"
    },
    body5:{
        fontFamily: "'Roboto', sans-serif",
        fontSize:"0.875rem",//14
        fontWeight:400,
        color:"#5C5C5C"
    },


  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:"capitalize",
        },
      
      },
      
    },
      MuiSelect:{
        styleOverrides:{
          root:{
            fontSize:"13px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d7d5d5"
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E0E0E0",
            },
          }
        }
      },
      MuiOutlinedInput:{
        styleOverrides:{
          root:{
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d7d5d5"
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E0E0E0",
            },
          }
        }
      }
  },
  
});
