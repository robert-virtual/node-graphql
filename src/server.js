const express = require('express')
const {ApolloServer,gql} = require('apollo-server-express')
const filesRoutes = require('./routes/files')
const {typeDefs} = require('./typedefs')
const {resolvers} = require('./resolvers');



( async ()=>{

    const app = express()
    
   app.use('/files',filesRoutes)
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    await server.start()
    server.applyMiddleware({app,path:'/api'})
   
    
    app.listen(3001,()=>{
        console.log('running on ',server.graphqlPath);
    })
})();



