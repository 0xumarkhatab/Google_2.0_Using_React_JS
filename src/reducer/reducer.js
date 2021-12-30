import { createStore } from "redux";

const initialState=
{
    searchTerm:null,
};

const reducer=(state=initialState,action)=>{
    console.log(action);

    switch(action.type){
        case "SET_SEARCH_TERM":
            return ({
                ...state,
                searchTerm:action.searchTerm,
            })
        default:
            return state;
    }


}


const store=createStore(reducer);

export default store ;
