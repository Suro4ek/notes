import {gql} from "@apollo/client";

const REGISTER_MUTATION = gql`
    mutation Register($username: String!, $password: String!) {
        register(username: $username, password: $password)
    }
`

const LOGIN_MUTATION = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
`

const ME = gql`
    query Me {
        me {
            nickname
        }
    }
`

const ALL_NOTES = gql`
    query AllNote {
        allNote {
            name
            id
            desc
        }
    }
`

const MY_NOTES = gql`
    query MyNote {
        myNote {
            id
            name
            desc
        }
    }
`

const CREATE_POST = gql`
    mutation NewNote($name: String!, $desc: String!) {
        newNote(name: $name, desc: $desc) {
            id
            name
        }
    }`

const CHANGE_USER = gql`
    mutation ChangeUser($username: String, $password: String) {
        changeUser(username: $username, password: $password)
    }`
export {
    LOGIN_MUTATION,
    CHANGE_USER,
    REGISTER_MUTATION,
    ALL_NOTES,
    ME,
    CREATE_POST,
    MY_NOTES
}