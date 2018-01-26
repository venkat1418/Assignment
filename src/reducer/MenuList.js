export default function (state=null,action={}){
    if(state===null){
        state= {
            activeMenu:{
                label:"Films",
                value:'films'
            },
            MenuList:[
                {
                    label:"Films",
                    value:'films'
                }
            ]
        };
    }
    switch(action.type){
        case "SET_ACTIVE_MENU" :
           return {
            activeMenu:{...action.payLoad},
            MenuList:[...state.MenuList]
        }
        break;
        default:
            return state
    }
    return 
}