import {createSlice} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token) => {
   try {
      await AsyncStorage.setItem('@auth_token', token);
   } catch (error) {
      console.error('Error storing token', error);
   }
};

// Token alma
const getToken = async () => {
   try {
      return await AsyncStorage.getItem('@auth_token');
   } catch (error) {
      console.error('Error getting token', error);
   }
};

const initialState = {
   //user: getToken() || false
   user: {
      name: "Ricardo Quaresma",
      email: "emrecaal@gmail.com",
      password: "123123",
      position: "Sol Açık"
   }
}

const slice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state, action) => {
         localStorage.setItem('user', JSON.stringify(action.payload))
         state.user = action.payload
      },
      logout: (state) => {
         localStorage.removeItem("user")
         state.user = false
      },
   }
})

export const {login, logout} = slice.actions
export default slice.reducer
