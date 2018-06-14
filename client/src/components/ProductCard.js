import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  productImage: {
    width: '100%',
    display: 'block',
    margin: '0 auto'
  },
  productImageContainer: {
    margin: '0 auto'
  },
  cardContent: {
    display: 'flex'
  }
})

let ProductCard = props => {
  const {
    classes,
    name,
    salePrice,
    shortDescription,
    mediumImage,
    customerRatingImage,
    customerRating,
    categoryPath
  } = props

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={2} className={classes.productImageContainer}>
            <img
              src={mediumImage}
              alt=""
              aria-hidden
              className={classes.productImage}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography component="p">{categoryPath}</Typography>
            <Typography variant="headline">{name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              ${salePrice}
            </Typography>
            <Typography component="p">{shortDescription}</Typography>
            <p className="visuallyHidden">
              The customer rating is {customerRating}
            </p>
            <img src={customerRatingImage} alt="" aria-hidden />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

ProductCard = withStyles(styles)(ProductCard)

export { ProductCard }
