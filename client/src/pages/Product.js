import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { ProductCard, ProductList, Error } from '../components'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  loader: {
    position: 'relative',
    left: '50%'
  }
})

const GET_PRODUCT_AND_RECOMMENDATIONS = gql`
  query productWithRecommended($itemId: ID) {
    productWithRecommended(itemId: $itemId) {
      product(itemId: $itemId) {
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
      recommended(itemId: $itemId) {
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
  }
`

let Product = props => {
  const { classes, match } = props
  const { itemId } = match.params

  return (
    <Grid item xs={12}>
      <Typography variant="display1" gutterBottom>
        Product Page
      </Typography>

      <Query query={GET_PRODUCT_AND_RECOMMENDATIONS} variables={{ itemId }}>
        {({ loading, error, data, client }) => {
          if (loading) return <CircularProgress className={classes.loader} />
          if (error) return <Error message={error} />

          const { product, recommended } = data.productWithRecommended
          return (
            <Grid container spacing={24}>
              <Grid item sm={12} lg={8}>
                <ProductCard
                  itemId={product.itemId}
                  name={product.name}
                  salePrice={product.salePrice}
                  shortDescription={product.shortDescription}
                  thumbnailImage={product.thumbnailImage}
                  mediumImage={product.mediumImage}
                  customerRatingImage={product.customerRatingImage}
                  customerRating={product.customerRating}
                  categoryPath={product.categoryPath}
                />
              </Grid>
              <Grid key={data.itemId} item sm={12} lg={4}>
                <Typography variant="subheading" gutterBottom>
                  Recommended For You
                </Typography>
                <ProductList list={recommended.products} />
              </Grid>
            </Grid>
          )
        }}
      </Query>
    </Grid>
  )
}

Product = withStyles(styles)(Product)

export { Product }
