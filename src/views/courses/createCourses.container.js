import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateCoursesView from './createCourses.view';
import AppContext from '../../contexts/AppContext';
import { createCourses } from '../../store/appActions/courses.actions';


const CreateProvider = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appContext = useContext(AppContext)

    const [ course, setCourse ] = useState({
        "name": Text,
        "description": Text,
        "start_date": Date,
        "end_date": Date,
        "price": Number,
    })

    const setCourseDetails = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setCourse(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }

    const save = async () => {
        const payload = {
            "name": course.name,
            "description": course.description,
            "start_date" : course.start_date,
            "end_date" : course.end_date,
            "price" : course.price,
            }
            console.log("first")
            appContext.setloader(true);  // Start loading
            try {
              await dispatch(createCourses(payload));
              appContext.notify("Course Saved Successfully", "success");
              navigate("/courses/create");
            } catch (error) {
              appContext.notify("Failed to Save Course", "error");
            } finally {
              appContext.setloader(false);  // Stop loading
            }
        }

    return (
        <>
            <CreateCoursesView
                course={course} 
                setCourseDetails={setCourseDetails} 
                save={save}  />
        </>
    )
}

export default CreateProvider;
