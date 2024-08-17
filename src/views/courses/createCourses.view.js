import React, { useState, useRef } from 'react';
import { Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';


const CreateCoursesView = (props) => {

  return (
    <React.Fragment>
      <Row className="btn-page">
        <Col md={12} sm={12}>
          <Card style={{"height": "85vh", padding: "10px"}}>
            <Card.Title as="h6">Create Courses</Card.Title>
            <Card.Body>
            <Tabs defaultActiveKey="Courses" className="mb-3">
            <Tab eventKey="Courses" title="Course Details">
              <Row>
                <Col sm={6} style={{"padding": "10px"}}>
                  <div className="form-group fill">
                    <label className="floating-label" htmlFor="name">
                      Name
                    </label>
                    <input 
                        type="text" 
                        name="name"
                        value={props.course?.name}
                        onChange={props.setCourseDetails}
                        className="form-control" 
                        id="name" placeholder="Provider Name" />
                  </div>
                </Col>
                
                {/* <Col sm={6} style={{"padding": "10px"}}>
                  <div className="form-group fill">
                    <label>Type</label>
                    <select name="type" value={props.provider.type} className="mb-3 form-control" onChange={props.setProviderDetails}>
                    <option key={"default"}  value={''} >
                                      {''}
                    </option>
                    <option key={"default"} name={"1"}  value={'ding-connect'} >
                                      {'DingConnect+'}
                    </option>


                    </select>
                  </div>
                </Col> */}
                <Col sm={6} style={{"padding": "10px"}}>
                  <div className="form-group fill">
                    <label className='floating-label' htmlFor="description">Description</label>
                    <textarea 
                        type="text" 
                        name="description"
                        style={{height: "150px"}}
                        value={props.course.description}
                        onChange={props.setCourseDetails}
                        className="form-control" 
                        id="description" placeholder="Notes" />
                  </div>
                </Col>
                <Col sm={6} style={{"padding": "10px"}}>
                  <div className="form-group fill">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                      type="date"
                      name="start_date"
                      value={props.course.start_date}
                      onChange={props.setCourseDetails}
                      className="form-control"
                      id="start_date"
                    />
                  </div>
                </Col>
                <Col sm={6} style={{"padding":"10px"}}>
                  <div className="form-group fill">
                    <label htmlFor="end_date">End Date</label>
                    <input
                      type="date"
                      name='end_date'
                      value={props.course.end_date}
                      onChange={props.setCourseDetails}
                      className="form-control"
                      id="end_date"
                    />
                  </div>
                </Col>
                <Col sm={6} style={{"padding":"10px"}}>
                <div className="form-group fill">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={props.course.price}
                    onChange={props.setCourseDetails}
                    className="form-control"
                    id="price"
                    placeholder="Price"
                  />
                </div>  
                </Col>
                <Col sm={12}  style={{"padding": "10px"}}>
                <Button 
                  onClick={() => props.save()}
                  type="button" 
                  style={{"color": "white", backgroundColor: "#042E32", width: "200px", height: "40px"}} className="waves-effect waves-light">
                  Save
                </Button>
                <Button 
                  onClick={() => null}
                  type="button" 
                  style={{"color": "white", backgroundColor: "#A90E18", width: "200px", height: "40px"}} className="waves-effect waves-light">
                  Cancel
                </Button>
                </Col>
                
              </Row>
              </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreateCoursesView;
