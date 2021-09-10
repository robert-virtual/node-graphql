const resolvers = {
    Query: {
        hello: ()=> "Hola mundo",
        miprimergql: ()=> "Este es mi primer query con gql"
    }
}

module.exports = {
    resolvers
}