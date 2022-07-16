import React from 'react';
import{Row,Col,Button,Modal,Form} from 'react-bootstrap'
const Todo = ({id, title ,description }) => {
    return (
    <>
    <Row className='border-bottom pt-3'>
        <Col md={1}>
            <Form>
                <Form.Check type='checkbox'/>
            </Form>
        </Col>
        <Col>
            <h5>{title}</h5>
            <h5>{description}</h5>
        </Col>
        <Col md={2}>
            <Form>
                <Button variant='info' className='my-2 btn-block'>Edit</Button>
            </Form>
            <Form>
                <Button variant='danger' className='my-2 btn-block'>Delete</Button>
            </Form>
        </Col>
    </Row>
    </>
        
    )
}
export default Todo 