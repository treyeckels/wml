import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  ProductSearchContainer: {
    width: '50%',
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('md')]: {
      width: '75%'
    }
  },
  bootstrapStyleInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: 10,
    boxSizing: 'border-box'
  },
  inputAdornment: {
    cursor: 'pointer'
  }
})

const ENTER_KEYCODE = 13

class ProductSearch extends React.Component {
  state = {
    queryString: ''
  }

  onChange = evt => {
    this.setState({
      queryString: evt.target.value
    })
  }

  getSearchResults = evt => {
    evt.preventDefault()
    this.props.history.push(`/search/${this.state.queryString}`)
  }

  testForEnter = evt => {
    const code = evt.keyCode || evt.which
    if (code === ENTER_KEYCODE) {
      this.getSearchResults(evt)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <form
        className={classes.ProductSearchContainer}
        method="GET"
        action="/search"
      >
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="visuallyHidden"
        >
          Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          fullWidth
          classes={{
            root: classes.bootstrapStyleInput
          }}
          onChange={this.onChange}
          onBlur={this.getSearchResults}
          onKeyPress={this.testForEnter}
          disableUnderline={true}
          placeholder="Search..."
          endAdornment={
            <InputAdornment
              onClick={this.getSearchResults}
              className={classes.inputAdornment}
            >
              <SearchIcon />
            </InputAdornment>
          }
        />
      </form>
    )
  }
}

ProductSearch = withStyles(styles)(ProductSearch)

export { ProductSearch }
