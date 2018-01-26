import {combineReducers} from "redux";
import menuDetl from "./MenuList";
import filmsList  from "./Films/filmsList";
export default combineReducers({
    filmsList,
    menuDetl
})