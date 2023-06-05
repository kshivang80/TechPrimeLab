import * as types from "./project.actionType"

const initialState = {
    projects: [],
    isLoading: false,
    isError: false,
    filterdata:[],
}


const Projectreducer = (oldState = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case types.GET_PROJECT_REQUEST:
            return { ...oldState, isLoading: true }
        case types.GET_PROJECT_SUCCESS:
            return { ...oldState, isLoading: false, projects: payload }
        case types.GET_PROJECT_ERROR:
            return { ...oldState, isLoading: false, isError: true }


        case types.POST_PROJECT_REQUEST:
            return { ...oldState, isLoading: true }
        case types.POST_PROJECT_SUCCESS:
            return { ...oldState, isLoading: false, projects: [...oldState.projects,payload ]}
        case types.POST_PROJECT_ERROR:
            return { ...oldState, isLoading: false, isError: true }

        case types.FILTERDATA:
            return {...oldState, filterdata:payload}

        case types.CLEARFILTER:
            return {...oldState,filterdata:[]}

        default:
            return oldState
    }
}

export {Projectreducer}