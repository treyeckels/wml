import React from 'react'
import { ProductCard, Error } from '../components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  loader: {
    position: 'relative',
    left: '50%'
  }
})

const GET_SEARCH_RESULTS = gql`
  query search($queryString: String) {
    search(queryString: $queryString) {
      ids
      totalResults
      products {
        itemId
        name
        salePrice
        size
        shortDescription
        thumbnailImage
        mediumImage
        customerRatingImage
        customerRating
        categoryPath
      }
    }
  }
`
const getResultCards = (searchResults, classes) => {
  return searchResults.map(item => {
    return (
      <Grid key={item.itemId} item xs={12}>
        <Link to={`/product/${item.itemId}`} className="Link">
          <ProductCard
            itemId={item.itemId}
            name={item.name}
            salePrice={item.salePrice}
            shortDescription={item.shortDescription}
            thumbnailImage={item.thumbnailImage}
            mediumImage={item.mediumImage}
            customerRatingImage={item.customerRatingImage}
            customerRating={item.customerRating}
            categoryPath={item.categoryPath}
          />
        </Link>
      </Grid>
    )
  })
}

let SearchResults = props => {
  const { classes, match } = props
  const { queryString } = match.params

  return (
    <Grid item xs={12}>
      <Typography variant="display1" gutterBottom>
        Search Results
      </Typography>

      <Query query={GET_SEARCH_RESULTS} variables={{ queryString }}>
        {({ loading, error, data, client }) => {
          if (loading) return <CircularProgress className={classes.loader} />
          if (error) return <Error message={error} />
          const products = data.search.products || []

          return (
            <div>
              <Typography variant="subheading" gutterBottom>
                {data.search.totalResults} total results
              </Typography>
              <Grid container spacing={24}>
                {getResultCards(products, classes)}
              </Grid>
            </div>
          )
        }}
      </Query>
    </Grid>
  )
}

SearchResults = withStyles(styles)(SearchResults)

export { SearchResults }
