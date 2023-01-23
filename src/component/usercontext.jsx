import { createContext, useContext, useReducer } from "react";
import reducer from './userReducer';
// this imis the data leyer
export const UserContext = createContext();

const initialState ={
    token : null,
    user: Object
}
// Build a provider  
 export const UserProvider = ({children }) => {
   const [state,dispatch] = useReducer(reducer,initialState)
   const token= null; 
    const signup=()=>{
            dispatch({type:'signup',payload: token})
    }
    <UserContext.Provider value={{...state, signup}}>
        {children}
    </UserContext.Provider>

 }
export const useStateValue = () => useContext(UserContext);