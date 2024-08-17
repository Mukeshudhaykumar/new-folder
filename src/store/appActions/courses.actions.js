import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    getCourses as _getCourses,
} from "../../services/courses"
import { createCourses as _createCourses } from "../../services/courses"

export const getCourses = createAsyncThunk('getCourses', _getCourses)
export const createCourses = createAsyncThunk('createCourses', _createCourses)

