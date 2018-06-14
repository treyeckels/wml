const typeDefs = [
  `
      type Product {
        itemId: ID
        name: String
        salePrice: String
        shortDescription: String
        thumbnailImage: String,
        mediumImage: String,
        size: String,
        customerRatingImage: String,
        customerRating: String,
        categoryPath: String,
        brandName: String
      }

      type SearchResults {
        ids: [Int]
        totalResults: Int
        products: [Product]
      }

      type ProductWithRecommended {
        product(itemId: ID): Product
        recommended(itemId: ID): SearchResults
      }

      type Query {
        search(queryString: String): SearchResults
        product(itemId: ID): Product
        recommended(itemId: ID): SearchResults
        productWithRecommended(itemId: ID): ProductWithRecommended
      }
    `
]

module.exports = {
  typeDefs: typeDefs
}
