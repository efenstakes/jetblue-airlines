import { red, orange, deepOrange, teal, }from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'



// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA000',
    },
    secondary: {
      main: teal[400],
    },

    common: {
        black: '#1E1E1E',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 8,
  },
})


export default theme
