const graphql = require('graphql')
const chai = require('chai')
const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')
const expect = chai.expect

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// TODO(teckels): Mock and test resolvers
// schema
//   .getType('ProductWithRecommended')
//   .getFields()
//   .product.resolve(
//     {},
//     { itemId: 219009944 },
//     {
//       apiKey: 'ek56xf8m8jspxpzrfhzt5k5x',
//       api: 'http://api.walmartlabs.com/v1/'
//     }
//   )
//   .then(data => console.log(data))

describe('Query', () => {
  it('Should have a search query that accepts a String argument named queryString', () => {
    expect(schema.getQueryType().getFields()).to.have.property('search')
    expect(schema.getQueryType().getFields().search.args[0].name).to.eq(
      'queryString'
    )
    expect(
      schema.getQueryType().getFields().search.args[0].type
    ).to.deep.equals(graphql.GraphQLString)
  })

  it('Should have a search product that accepts an ID argument named itemId', () => {
    expect(schema.getQueryType().getFields()).to.have.property('product')
    expect(schema.getQueryType().getFields().product.args[0].name).to.eq(
      'itemId'
    )
    expect(
      schema.getQueryType().getFields().product.args[0].type
    ).to.deep.equals(graphql.GraphQLID)
  })

  it('Should have a search recommended that accepts an ID argument named itemId', () => {
    expect(schema.getQueryType().getFields()).to.have.property('recommended')
    expect(schema.getQueryType().getFields().recommended.args[0].name).to.eq(
      'itemId'
    )
    expect(
      schema.getQueryType().getFields().recommended.args[0].type
    ).to.deep.equals(graphql.GraphQLID)
  })

  it('Should have a search productWithRecommended that accepts an ID argument named itemId', () => {
    expect(schema.getQueryType().getFields()).to.have.property(
      'productWithRecommended'
    )
    expect(
      schema.getQueryType().getFields().productWithRecommended.args[0].name
    ).to.eq('itemId')
    expect(
      schema.getQueryType().getFields().productWithRecommended.args[0].type
    ).to.deep.equals(graphql.GraphQLID)
  })
})

describe('ProductWithRecommended', () => {
  it('Should have a field named product that resolves to a Product', () => {
    expect(
      schema.getType('ProductWithRecommended').getFields()
    ).to.have.property('product')
    expect(
      schema.getType('ProductWithRecommended').getFields().product.type
    ).to.deep.equals(schema.getType('Product'))
  })

  it('Should have a field named recommended that resolves to a Search Result', () => {
    expect(
      schema.getType('ProductWithRecommended').getFields()
    ).to.have.property('recommended')
    expect(
      schema.getType('ProductWithRecommended').getFields().recommended.type
    ).to.deep.equals(schema.getType('SearchResults'))
  })
})

describe('SearchResults', () => {
  it('Should have a field named totalResults that is an Int', () => {
    expect(schema.getType('SearchResults').getFields()).to.have.property(
      'totalResults'
    )
    expect(
      schema.getType('SearchResults').getFields().totalResults.type
    ).to.deep.equals(graphql.GraphQLInt)
  })
})
