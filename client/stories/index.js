import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  ProductSearch,
  Error,
  ProductCard,
  ProductList
} from '../src/components'
import { productMock, productWithRecommendedMock } from '../src/mockData'
import { BrowserRouter as Router, Route } from 'react-router-dom'

storiesOf('Components', module)
  .add('Error message', () => <Error message="This is an error message" />)
  .add('Product search', () => (
    <Router>
      <Route render={({ history }) => <ProductSearch history={history} />} />
    </Router>
  ))
  .add('Product Card', () => {
    const item = productMock.data.product
    return (
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
    )
  })
  .add('Product List', () => {
    const list =
      productWithRecommendedMock.data.productWithRecommended.recommended
        .products
    return (
      <Router>
        <ProductList list={list} />
      </Router>
    )
  })
