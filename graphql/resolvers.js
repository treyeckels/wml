const fetch = require('node-fetch')

const getRecommended = async (api, apiKey, itemId) => {
  const res = await fetch(
    `${api}nbp?itemId=${itemId}&numItems=10&apiKey=${apiKey}`
  )
  const json = await res.json()
  const ids = json.map(item => {
    return item.itemId
  })
  const totalResults = ids.length

  return {
    ids: ids.slice(0, 9),
    totalResults
  }
}

const getProduct = async (api, apiKey, itemId) => {
  const res = await fetch(`${api}items/${itemId}?apiKey=${apiKey}`)
  const json = await res.json()
  return json
}

const resolvers = {
  Query: {
    recommended: (root, args, context) => {
      const { itemId } = args
      const { apiKey, api } = context
      return getRecommended(api, apiKey, itemId)
    },
    productWithRecommended: async (root, args, context) => {
      const { itemId } = args
      const { apiKey, api } = context
      const res = await fetch(`${api}items/${itemId}?apiKey=${apiKey}`)
      const json = await res.json()
      return json
    },
    product: async (root, args, context) => {
      const { itemId } = args
      const { apiKey, api } = context
      return getProduct(api, apiKey, itemId)
    },
    search: async (root, args, context) => {
      const { queryString } = args
      const { apiKey, api } = context
      const res = await fetch(
        `${api}search?query=${queryString}&apiKey=${apiKey}`
      )
      const json = await res.json()
      const ids = json.items.map(item => {
        return item.itemId
      })
      const totalResults = json.totalResults
      return {
        ids: ids.slice(0, 9),
        totalResults
      }
    }
  },
  SearchResults: {
    ids: ({ ids }) => ids,
    totalResults: ({ totalResults }) => totalResults,
    products: async ({ ids }, args, context) => {
      const idsString = ids.toString()
      const { apiKey, api } = context
      const res = await fetch(`${api}items?ids=${idsString}&apiKey=${apiKey}`)
      const json = await res.json()
      return json.items
    }
  },
  ProductWithRecommended: {
    product: (root, args, context) => {
      const { itemId } = args
      const { apiKey, api } = context
      return getProduct(api, apiKey, itemId)
    },
    recommended: (root, args, context) => {
      const { itemId } = args
      const { apiKey, api } = context
      return getRecommended(api, apiKey, itemId)
    }
  }
}

module.exports = {
  resolvers
}
