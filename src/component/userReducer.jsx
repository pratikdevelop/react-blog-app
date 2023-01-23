import React from 'react'

const UserReducer = (state, action) => {
    if(action.type === "signup"){
      state.token = action.payload; 
    }
  return state;
}

export default UserReducer