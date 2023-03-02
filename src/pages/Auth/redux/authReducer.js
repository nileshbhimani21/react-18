import { AuthMap } from "./authAction";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  isLoading: false,
  user: null,
  authToken:null,
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'authToken']
}

const authReducer = persistReducer(persistConfig, (state = initialState, action) => {
  switch (action.type) {
    case AuthMap.LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthMap.LOGIN_SUCCESS: {  
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        authToken:action.payload.token
      };
    }
    case AuthMap.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }  
    default:
      return { ...state };
  }
});
export default authReducer
