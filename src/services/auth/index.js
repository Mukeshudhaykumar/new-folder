import apiService from "../axios";


export const login = async (data, { rejectWithValue }) => {
    try {
        const response = await apiService.post("/auth/token",data);
        return response.data
    } catch (error) {
        if (!error.response) {
            throw rejectWithValue(error)
        }
        throw rejectWithValue(error.response.data)
    }
}


export const me = async (data, { rejectWithValue }) => {
    try {
        const response = await apiService.post("/me/",data);
        return response.data
    } catch (error) {
        if (!error.response) {
            throw rejectWithValue(error)
        }
        throw rejectWithValue(error.response.data)
    }
}