import apiService from "../axios";

export const getCourses = async (
        params,
        { rejectWithValue },
    ) => {
        try {
            const response = await apiService.get("http://192.168.1.102:8000/courses") 
            return response.data.data
        } catch (error) {
            if (!error.response) {
                throw rejectWithValue(error)
            }
            throw rejectWithValue(error.response.data)
        }
};
export const createCourses  = async (
    params,
    { rejectWithValue },
) => {
    try {
        const response = await apiService.post("http://192.168.1.102:8000/courses/create") 
        return response.data.data
    } catch (error) {
        if (!error.response) {
            throw rejectWithValue(error)
        }
        throw rejectWithValue(error.response.data)
    }
};

