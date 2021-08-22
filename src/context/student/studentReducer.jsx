import { GET_STUDENT,
     GET_STUDENTS,
      SET_LOADING } from "../types"

export default (state, action) => {
    switch (action.type) {

    case GET_STUDENT:
        return { ...state, 
            student: action.payload,
            loading: false }

    case GET_STUDENTS:
        return { ...state, 
            students: action.payload,
            loading: false }

    case GET_STUDENT:
        return { ...state, 
            loading: true }

    default:
        return state
    }
}
