export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";
export const SET_FILMS = "SET_FILMS";

/**
 * Function to fetch the Films list from backend.
 */
export function fetchFilmsList(){
    return dispatch=>{
        fetch("http://www.snagfilms.com/apis/films.json?limit=10")
        .then(res=> res.json())
        .then(data=> dispatch(setFilms(data.films.film)))
    }
}

/**
 * Function to set the current active menu.
 * @param {*} activeMenuDetl 
 */
export function setActiveMenu(activeMenuDetl){
    return {
        type:SET_ACTIVE_MENU,
        payLoad:activeMenuDetl.payLoad
    }
}

/**
 * Action to set the Films  List
 * @param {*} filmsList 
 */
export function setFilms(filmsList){
    debugger;
    return {
         type:SET_FILMS,
         filmsList
     }
 }