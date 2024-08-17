import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import courses from "./courses/courses.slice"


const reducers = combineReducers({
  form: formReducer,
  courses: courses.reducer,
});

export default reducers;
