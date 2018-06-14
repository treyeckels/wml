import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

const styles = {
  avatar: {
    width: 60,
    height: 60
  }
}

const getListItems = (items, classes) => {
  return items.map(item => {
    return (
      <Link key={item.itemId} to={`/product/${item.itemId}`} className="Link">
        <ListItem dense button className={classes.listItem}>
          <Avatar
            alt=""
            aria-hidden
            src={item.thumbnailImage}
            className={classes.avatar}
          />
          <ListItemText primary={item.name} secondary={`$${item.salePrice}`} />
        </ListItem>
      </Link>
    )
  })
}

let ProductList = props => {
  const { classes, list } = props

  return <List>{getListItems(list, classes)}</List>
}

ProductList = withStyles(styles)(ProductList)

export { ProductList }
