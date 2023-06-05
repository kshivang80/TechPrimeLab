import * as types from "./project.actionType"
import axios from "axios"


const getProjectRequest=()=>{

    return{
        type:types.GET_PROJECT_REQUEST
    }
}

const getProjectSuccess=(payload)=>{

    return{
        type:types.GET_PROJECT_SUCCESS,
        payload
    }
}

const getProjectError=()=>{

    return{
        type:types.GET_PROJECT_ERROR
    }
}


const postProjectRequest=()=>{

    return{
        type:types.POST_PROJECT_REQUEST
    }
}

const postProjectSuccess=(payload)=>{

    return{
        type:types.POST_PROJECT_SUCCESS,
        payload
    }
}

const postProjectError=()=>{

    return{
        type:types.POST_PROJECT_ERROR
    }
}


///////////////////////// filter funtion ////////////

export const filterdata_FN = (payload) => {
    return { type: types.FILTERDATA, payload };
  };
  
 export const clearfilter_FN=()=>{
    return {type:types.CLEARFILTER}
  }



function postProjects(payload){

    return function(dispatch){

        dispatch(getProjectRequest())
        return axios
        .post("https://jade-dove-kilt.cyclic.app/create",payload)
        .then((r)=>{
            dispatch(getProjectSuccess(r.data))
            console.log(r.data)
        })
        .catch((e)=>{
            dispatch(getProjectError())
        })
    }
}


 const getProjects=(params)=>(dispatch)=>{
    dispatch(getProjectRequest())
    axios.get(`https://jade-dove-kilt.cyclic.app/allproject`,params)
    .then((r)=>{
        console.log(r.data)
        dispatch(getProjectSuccess(r.data))

    })
    .catch((e)=>{
        dispatch(getProjectError())
    })
 }

 export {postProjects,getProjects,postProjectRequest,postProjectError,postProjectSuccess}