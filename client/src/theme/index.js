import { createMuiTheme } from '@material-ui/core/styles'

/**
 * Theme overrides for Material UI's components.
 * [More Info]{@link https://material-ui.com/customization/default-theme/#default-theme}
 *
 * Colors, fonts are taken from
 * [www.walmartbrandcenter.com]{@link https://www.walmartbrandcenter.com/our-core-identity.aspx}
 */
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
