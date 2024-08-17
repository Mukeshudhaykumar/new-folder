import React from "react"
import { Row, Col, Button } from 'react-bootstrap';
import TableComponent from "../../components/Table"
import { useNavigate } from 'react-router-dom';
import { prepareTableData, tableColumns } from '../../data/coursesData';


const ListProvider  = props => {

    const navigate = useNavigate()

    return (
    <React.Fragment>
      <Row> 
        <Col className="d-flex justify-content-end" style={{"margin": "10px"}}>
          <Button variant="success" style={{"background": "#042E32", "color": "#ffffff"}} className="btn-md btn-round has-ripple ml-2" onClick={() => navigate("/courses/create")}>
            <i className="feather icon-plus" /> Create Course
          </Button>
        </Col>
      </Row>
      <Row>
        <TableComponent
              header={"Courses"}
              rows={props.data.map(x => prepareTableData(x))}
              columns={tableColumns()}
        />
      </Row>
    </React.Fragment>
)}


export default ListProvider