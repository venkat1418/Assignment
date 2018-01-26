export default function filmsList(state=[],action={}){
   switch(action.type){
       case "SET_FILMS" :
          return action.filmsList
       break;
       default:return state;
   }
}