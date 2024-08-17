import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCoursesView from "./listCourses.view";
import { getCourses } from "../../store/appActions/courses.actions";
import AppContext from '../../contexts/AppContext';



const ListCourses = props => {

    const appContext = useContext(AppContext)
    const courses = useSelector((state) => state.courses.courses)
    const error = useSelector((state) => state.courses.error)


    const dispatch = useDispatch()
    useEffect(() => console.log(courses), [])
    
    useEffect(() => {
        error.message && appContext.notify( error?.message, "error")
    }, [error])


    useEffect(()=>{
        dispatch(getCourses({}))
    },[])

    return (
        <React.Fragment>
            <ListCoursesView
                data={courses}
                loading={true}
            />
        </React.Fragment>
    )
}


export default ListCourses