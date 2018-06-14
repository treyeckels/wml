import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0071ce',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffc220',
      contrastText: '#041e42'
    },
    action: {
      hover: '#ffc220'
    }
  },
  typography: {
    fontFamily: 'BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif',
    display1: {
      color: '#004c91'
    },
    subheading: {
      color: '#367c2b'
    }
  }
})

export { theme }
