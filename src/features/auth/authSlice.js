import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
   user:null,
   loading:false,
   error:null,
}

const authSlice = createSlice ({
  name:'auth',
  initialState:INITIAL_STATE,
  reducers : {
    setUser:(state,action) => {
        state.user=action.payload;
    },

    setLoading: (state,action) => {
      state.loading=action.payload;
    },
    setError: (state,action) => {
      state.error=action.payload;
    },

    logOutUser: (state) => {
      state.user=null;
    }
  }
});
export const {setUser,setLoading,setError,logOutUser} = authSlice.actions;
export default authSlice.reducer;