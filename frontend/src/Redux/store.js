import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/Auth.reducer";
import { Projectreducer } from "./Project/Project.reducer";


const rootReducer = combineReducers({
    auth : authReducer,
    project:Projectreducer
  
});
const store =legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}