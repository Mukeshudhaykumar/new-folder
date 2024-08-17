import React from 'react';
import { Link } from 'react-router-dom';


export const tableColumns = () => {
    return [
        {
            accessor: "id",
            Header: "ID",
        },
        {
            accessor: "name",
            Header: "Name",
    
        },
        {
            accessor: "description",
            Header: "Description",
    
        },
        {
            accessor: "start_date",
            Header: "Start Date",
    
        },
        {
            accessor: "end_date",
            Header: "End Date",
    
        },
        {
            accessor: "price",
            Header: "Price",
    
        },
    ]
}


export const prepareTableData = (course) => {

    return {
        ...course,
        "action": (
            <React.Fragment>
              <Link to={`/core/providers/${course.id}`} className="text-primary mx-1">
                <i className="feather icon-edit" />
              </Link>
            </React.Fragment>
          )
    }
}