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

/**
 * The enter Key on the keyboard. We use this later to deterimine if the user
 * clicked the `enter` key, indicating intent to inititate the search.
 */
const ENTER_KEYCODE = 13

/**
 * Product Search - Powers site search intent
 * Wrapper around Material UI form input components to keep track of user
 * input while typing in the input field and routing the quest when the user
 * expresses intent to search.
 */
class ProductSearch extends React.Component {
  state = {
    /**
     * There are multiple ways to trigger the search intent, so this holds
     * a single source of truth of what is in the input at all times.
     */
    queryString: ''
  }

  onChange = evt => {
    this.setState({
      queryString: evt.target.value
    })
  }

  /**
   * We are getting the value from state and not the evt
   * target so that we have 1 source of truth for the value
   * of the input field which can be accessed by any
   * method of this component and always receive the same answer.
   *
   * @param {Event} evt The event that triggered this event handler
   */
  getSearchResults = evt => {
    evt.preventDefault()
    this.props.history.push(`/search/${this.state.queryString}`)
  }

  /**
   * Detects if user signaled intent to start search via tapping
   * `Enter` on the keyboard. Consider throttling this
   * if we see performance issues (todo: does react automaticallty
   * handle throttling in this case?)
   *
   * @param {Event} evt The event that triggered this event handler
   */
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
