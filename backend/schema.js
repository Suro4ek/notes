const {gql} = require("apollo-server");
module.exports = gql`
    type User{
        id: ID
        nickname: String
    }
    type Note{
        id: ID
        name: String
        desc: String
        author: User
    }
    type Query{
        allNote: [Note]
        me: User
        myNote: [Note]
    }
    

    type Mutation{
        newNote(name: String! desc: String!): Note
        register(        username: String!
            password: String!):String
        login(        username: String!
            password: String!): String
        changeUser(        username: String
        password: String): Boolean
    }
`