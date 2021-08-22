import React, {useReducer} from "react";
import Axios from 'axios';

import StudentContext from "./studentContext";
import StudentReducer from "./studentReducer";
import { GET_STUDENT, GET_STUDENTS, SET_LOADING } from "../types";

const StudenState = (props) => {


    const initialState = {
        student: {},
        students: [],
        loading: false
    }

    const [state, dispatch] = useReducer(StudentReducer, initialState);

    const getStudent = async () => {
        setLoading()
        

        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}/assessment/students`)
            .then((resp) => {

                dispatch({
                    type: GET_STUDENT,
                    payload: resp.data
                })
                
            }).catch((err) => {
            console.log(`Error! Could not get stduent ${err}`)
                
            });
        } catch (err) {
            console.log(`Error! Could not get stduent ${err}`)
        }
    }

    const getStudents = async () => {
        setLoading()
        

        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}/assessment/students`)
            .then((resp) => {
                dispatch({
                    type: GET_STUDENTS,
                    payload: resp.data.students
                })
                
            }).catch((err) => {
            console.log(`Error! Could not get stduent ${err}`)
                
            });
        } catch (err) {
            console.log(`Error! Could not get stduent ${err}`)
        }
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <StudentContext.Provider
        value={{
            student: state.student,
            students: state.students,
            loading: state.loading,
            getStudent,
            getStudents
            
        }}>


        {props.children}
    </StudentContext.Provider>

}

export default StudenState;
