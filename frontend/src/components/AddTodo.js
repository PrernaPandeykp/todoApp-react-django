import react, {useState} from 'react'
import React from 'react';
import {Form ,Button} from 'react-bootstrap'

const AddTodo = ({ addTodo }) => {
    const [title,setTitle] =useState('')
    const [description,setDescription] =useState('')

    const addTodoHandler = e=>{
        e.preventdefault()
        addTodo({
            title,
            description,
            completed:false,
        })
    }
    return (
        <div>
        <Form>
            <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='enter tdo title' onChange={e=> setTitle (e.target.value)}/>
            </Form.Group>
            <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder='enter tdo title'onChange={e=> setDescription (e.target.value)}/>
            </Form.Group>
            <Button variant='primary' type='submit' onClick={addTodoHandler}>Add Todo</Button>
        </Form>
        </div>
        
    )
}

    
export default AddTodo