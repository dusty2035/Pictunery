import { useReducer } from "react"
import UserContext from "./UserContext"
const user = 'Ali Abbas'


const userReducer = (state, action) => {
    if(action.value === 'ADD_USER'){
        const updatedUsers = state.users.push({
            name: action.name,
            password: action.password,
            posts: [],
        })

        return {
            users: updatedUsers
        }
    }

    if(action.value === 'ADD_POST'){
        const updatedPosts = state.users[`${user}`].posts.push({
            img: action.img,
            liked: false,
            comments: [],
            date: new Date()
        })

        return {
            users: updatedPosts
        }
    }

}


const UserContextProvider = (props) => {
    const [users, dispachAddUsers] = useReducer(userReducer, {
        users: [{
            name: '',
            password: '',
            posts: [],
        }],
        loggedIn: false
    })

    const addUser = (name, password) => {
        dispachAddUsers({value: 'ADD_USER', name, password})
    }

    const userContext = {
        users: users,
        adduser: addUser
    }

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider