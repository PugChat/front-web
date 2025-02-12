import { createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
    user: "",
    username: "",
    user2: "",
    jwt: ""
};

const reducer = (state=initialState, action) => {
    if (action.type === "SAVEUSER"){
        return{
            ...state,
            user: action.user
        }
    } else if (action.type === "DELETEUSER"){
        return {
            ...state,
            user: ""
        }
    } else if (action.type === "SAVEUSERNAME"){
        return {
            ...state,
            username: action.username
        }
    } else if (action.type === "DELETEUSERNAME"){
        return{
            ...state,
            username: ""
        }
    } else if (action.type === "SAVEUSER2"){
        return{
            ...state,
            user2: action.user
        }
    } else if (action.type === "DELETEUSER2"){
        return{
            ...state,
            user2: ""
        }
    } else if (action.type === "SAVEJWT"){
        return{
            ...state,
            jwt: action.jwt
        }
    } else if (action.type === "DELETEJWT"){
        return{
            ...state,
            jwt: ""
        }
    }
    return state;
};


export default createStore(reducer, {user: "", username: "", user2: "", jwt: ""}, composeWithDevTools(applyMiddleware(), persistState()));