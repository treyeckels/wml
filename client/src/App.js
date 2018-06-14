import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { SearchResults, Product, Home } from './pages'
import { ProductSearch } from './components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import './App.css'

const client = new ApolloClient({
  uri: `/graphql`
})

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundImage: 'url(/img/Walmart_Logos_LockupwTag_horiz_1C_wht_rgb.png)',
    backgroundRepeat: 'no-repeat',
    height: 100,
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'url(/img/Walmart_Spark.png)',
      backgroundPosition: '20px center'
    }
  },
  mainContent: {
    maxWidth: 1240,
    width: '90%',
    margin: `${theme.spacing.unit * 2}px auto`
  }
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <ApolloProvider client={client}>
        <Router>
          <Grid container>
            <AppBar position="sticky" className={classes.container}>
              <Route
                render={({ history }) => <ProductSearch history={history} />}
              />
            </AppBar>

            <Grid container className={classes.mainContent} spacing={24}>
              <Switch>
                <Redirect exact path="/search" to="/" />
                <Route exact path="/" component={Home} />
                <Route path="/search/:queryString" component={SearchResults} />
                <Route path="/product/:itemId" component={Product} />
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </ApolloProvider>
    )
  }
}

export default withStyles(styles)(App)
