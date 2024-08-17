
const loaders ={
    pending:false,
    fullfilled:false,
    rejected: false
}

const singleDataSet = {
id:0,
name: '',
type: '',
config: {},
}


export const initialState = {
    error:{
        message:'',
        flag: false
    },
    courses: []
}
    